package com.Knowvex.Services;

import com.Knowvex.Models.BillingAddressModel;

import java.util.List;
import java.util.UUID;

public interface BillingAddressService {

    boolean addAddress(BillingAddressModel address);

    boolean removeAddress(UUID addressId);

    boolean updateAddress(BillingAddressModel addressModel);

    List<BillingAddressModel> addresses();

}
