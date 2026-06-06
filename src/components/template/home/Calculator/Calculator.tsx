import React from 'react'
import { Button } from "@mantine/core";
function Calculator() {
    return (
        <>
            <section>
                <div className="container">
                    <h2>ماشین حساب ارز</h2>
                    <div>
                        <ul>
                            <li>
                                شارژ حساب های بین المللی
                            </li>
                            <li>
                                پرداخت های اینترنتی
                            </li>
                            <li>
                                گیفت کارت
                            </li>
                            <li>
                                افتتاح حساب ها
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <label>شهر:</label>
                            <select id="city">
                                <option value="charge">شارژ حساب بی پال</option>
                                <option value="create">افتتاح حساب بی پال</option>
                                <option value="verfy">وریفای حساب بی پال</option>
                                <option value="cash">نقد کردن درآمد ارزی</option>
                                <option value="payment">پرداخت با پی بال</option>
                                <option value="paymentMaster">خرید با مستر / ویزا کارت</option>
                            </select>
                        </div>
                        <div>
                            <label>شهر:</label>
                            <select id="city">
                                <option value="dollor">دلار بی پال</option>
                                <option value="uro">یورو</option>
                                <option value="pond">پوند</option>
                                <option value="derham">درهم</option>
                                <option value="lire">لیر</option>
                                <option value="dollorCanada">دلار کانادا</option>
                            </select>
                            <input type="text" placeholder='مقدار' />
                        </div>
                        <div>
                            <h4>قیمت نهایی خرید</h4>
                            <div>
                                <span>تومان</span>
                                <span>۱۷۸,۳۹۰</span>
                            </div>
                        </div>
                        <div>
                            <Button>ثبت سفارش</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calculator