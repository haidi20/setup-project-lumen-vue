<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MidtransController extends Controller
{
    private $enabledPayments = [
        "credit_card",
        "gopay",
        "shopeepay",
        "permata_va",
        "bca_va",
        "bni_va",
        "bri_va",
        "echannel",
        "other_va",
        "danamon_online",
        "mandiri_clickpay",
        "cimb_clicks",
        "bca_klikbca",
        "bca_klikpay",
        "bri_epay",
        "xl_tunai",
        "indosat_dompetku",
        "kioson",
        "Indomaret",
        "alfamart",
        "akulaku"
    ];

    public function __construct()
    {
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;
    }

    public function index()
    {
        // Populate customer's info
        $customerDetails = array(
            'first_name'       => "Andri",
            'last_name'        => "Setiawan",
            'email'            => "test@test.com",
            'phone'            => "081322311801",

        );

        $params = array(
            'enabled_payments' => $this->enabledPayments,
            'transaction_details' => array(
                'order_id' => rand(),
                'gross_amount' => 15000, // total pembelanjaan,
            ),
            'customer_details' => $customerDetails,
            'expiry' => array(
                'start_time' => date("Y-m-d H:i:s T"),
                'unit' => 'days',
                'duration' => 7,
            ),
        );

        $snap = \Midtrans\Snap::createTransaction($params);

        return response()->json($snap);
    }

    public function completed(Request $request)
    {
        $code = $request->query('order_id');

        return "Thank you for completing the payment process!. code = " . $code;
    }

    /**
     * Show unfinish payment page
     *
     * @param Request $request payment data
     *
     * @return void
     */
    public function unfinish(Request $request)
    {
        $code = $request->query('order_id');

        return "Sorry, we couldn't process your payment. code = " . $code;
    }

    /**
     * Show failed payment page
     *
     * @param Request $request payment data
     *
     * @return void
     */
    public function failed(Request $request)
    {
        $code = $request->query('order_id');

        return "Sorry, we couldn't process your payment. code = " . $code;
    }

    public function notification()
    {
        $payload = request()->getContent();
        $notification = json_decode($payload);

        $validSignatureKey = hash("sha512", $notification->order_id . $notification->status_code . $notification->gross_amount . env('MIDTRANS_SERVER_KEY'));

        if ($notification->signature_key != $validSignatureKey) {
            return response(['message' => 'Invalid signature'], 403);
        }

        $paymentNotification = new \Midtrans\Notification();
        // $order = Order::where('code', $paymentNotification->order_id)->firstOrFail();

        // if ($order->isPaid()) {
        //     return response(['message' => 'The order has been paid before'], 422);
        // }

        $transaction = $paymentNotification->transaction_status;
        $type = $paymentNotification->payment_type;
        $orderId = $paymentNotification->order_id;
        $fraud = $paymentNotification->fraud_status;

        if ($transaction == 'capture') {
            // For credit card transaction, we need to check whether transaction is challenge by FDS or not
            if ($type == 'credit_card') {
                if ($fraud == 'challenge') {
                    // TODO set payment status in merchant's database to 'Challenge by FDS'
                    // TODO merchant should decide whether this transaction is authorized or not in MAP
                    return "Transaction orderId: " . $orderId . " is challenged by FDS";
                } else {
                    // TODO set payment status in merchant's database to 'Success'
                    return "Transaction orderId: " . $orderId . " successfully captured using " . $type;
                }
            }
        } else if ($transaction == 'settlement') {
            // TODO set payment status in merchant's database to 'Settlement'
            return "Transaction orderId: " . $orderId . " successfully transfered using " . $type;
        } else if ($transaction == 'pending') {
            // TODO set payment status in merchant's database to 'Pending'
            return "Waiting customer to finish transaction orderId: " . $orderId . " using " . $type;
        } else if ($transaction == 'deny') {
            // TODO set payment status in merchant's database to 'Denied'
            return "Payment using " . $type . " for transaction orderId: " . $orderId . " is denied.";
        } else if ($transaction == 'expire') {
            // TODO set payment status in merchant's database to 'expire'
            return "Payment using " . $type . " for transaction orderId: " . $orderId . " is expired.";
        } else if ($transaction == 'cancel') {
            // TODO set payment status in merchant's database to 'Denied'
            return "Payment using " . $type . " for transaction orderId: " . $orderId . " is canceled.";
        }
    }
}
