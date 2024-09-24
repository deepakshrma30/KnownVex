package com.Knowvex.Controllers;

import com.Knowvex.Models.BillingAddressModel;
import com.Knowvex.Services.BillingAddressService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/billing-addresses")
@RequiredArgsConstructor
public class BillingAddressController {

    private final BillingAddressService billingAddressService;

    @PostMapping
    public boolean addAddress(@Valid @RequestBody BillingAddressModel address) {
        return billingAddressService.addAddress(address);
    }

    @DeleteMapping("/{id}")
    public boolean removeAddress(@PathVariable("id") UUID addressId) {
        return billingAddressService.removeAddress(addressId);
    }

    @PutMapping("/update")
    public boolean updateAddress(@RequestBody BillingAddressModel address) {
        return billingAddressService.updateAddress(address);
    }

    @GetMapping
    public ResponseEntity<List<BillingAddressModel>> getAllAddresses() {
        List<BillingAddressModel> addresses = billingAddressService.addresses();
        return new ResponseEntity<>(addresses, HttpStatus.OK);
    }
}
