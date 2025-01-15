<?php

namespace App\Http\Controllers;

use App\Http\Resources\VoucherResource;
use App\Models\Voucher;
use Illuminate\Http\Request;

class VoucherController
{
    public function index() {
        $vouchers = Voucher::latest();

        return new VoucherResource(true, 'Success get data Voucher', $vouchers);
    }
}
