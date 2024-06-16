
interface User {
    readonly idx: number,
    email: string,
    userId: number,
    coupon?: string //optional
    freeTrial(): string,
    getCoupon(couponname: number): string,
}

const pragyan: User = {
    idx: 412,
    email: "pra2@gmail.com",
    userId: 321,
    coupon: "off50",
    freeTrial: () => {
        console.log(`id of the user ${pragyan.idx}`);
        console.log(`email of the user ${pragyan.email}`);
        console.log(`coupon name of the user ${pragyan.coupon}`);
        return "free trial started!";
    },
    getCoupon: (name) => {
        return name.toString();
    }
}
 
    pragyan.freeTrial();
    const coupon = pragyan.getCoupon(45060);
    console.log(coupon);

    
export {};
