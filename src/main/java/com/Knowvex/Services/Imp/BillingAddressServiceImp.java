package com.Knowvex.Services.Imp;

import com.Knowvex.Models.BillingAddressModel;
import com.Knowvex.Models.UserModel;
import com.Knowvex.Repositories.BillingAddressRepository;
import com.Knowvex.Services.BillingAddressService;
import com.Knowvex.Utils.JwtUtil;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional
public class BillingAddressServiceImp implements BillingAddressService {

    private final BillingAddressRepository billingAddressRepository;
    private final JwtUtil jwtUtil;

    @Override
    public boolean addAddress(BillingAddressModel address) {
        UserModel user = jwtUtil.getAuthenticatedUser();
        address.setUser(user);

        if (address.isDefault()) {
            billingAddressRepository.setOtherAddressesToNonDefault(user);
        }

        billingAddressRepository.save(address);
        return true;
    }

    @Override
    public boolean removeAddress(UUID addressId) {
        UserModel user = jwtUtil.getAuthenticatedUser();
        BillingAddressModel address = billingAddressRepository.findById(addressId)
                .orElseThrow(() -> new EntityNotFoundException("Billing address not found"));

        if (!address.getUser().equals(user)) {
            throw new IllegalArgumentException("You are not authorized to delete this address.");
        }
        address.setActive(false);
        billingAddressRepository.save(address);
        return true;
    }

    @Override
    public boolean updateAddress(BillingAddressModel address) {
        UserModel user = jwtUtil.getAuthenticatedUser();
        BillingAddressModel oldAddress = billingAddressRepository.findById(address.getId())
                .orElseThrow(() -> new EntityNotFoundException("Billing address not found"));

        if (!oldAddress.getUser().equals(user)) {
            throw new IllegalArgumentException("You are not authorized to update this address.");
        }
        address.setUser(user);

        if (address.isDefault() && !oldAddress.isDefault()) {
            billingAddressRepository.setOtherAddressesToNonDefault(user);
        }

        billingAddressRepository.save(address);
        return true;
    }

    @Override
    public List<BillingAddressModel> addresses() {
        UserModel user = jwtUtil.getAuthenticatedUser();
        return billingAddressRepository.findAllByUserAndActive(user,true);
    }
}
