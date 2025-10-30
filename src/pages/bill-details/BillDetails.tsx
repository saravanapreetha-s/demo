const BillDetails = () => {
  const items = [
    {
      name: "Item Name",
      description: "Item description",
      qty: 1,
      rate: 3000,
      amount: 3000,
    },
    {
      name: "Item Name",
      description: "Item description 1",
      qty: 1,
      rate: 1500,
      amount: 3000,
    },
  ];

  return (
    <div className="py-5 px-4 w-full h-screen flex flex-col justify-between bg-white rounded-xl border border-(--color-border)">
      <div className="flex flex-col">
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-between">
            <div className="text-(--color-primary-text) text-xs">
              <p className="mb-1 font-medium">Billed to</p>
              <p className="text-(--color-secondary-text) text-xs font-semibold">
                Company Name
              </p>
              <p>Company address</p>
              <p>City, Country - 00000</p>
              <p>+0 (000) 123-4567</p>
            </div>
            <div>
              <p className="text-(--color-primary-text)  mb-1 text-xs font-medium">
                Subject
              </p>
              <p className="text-(--color-secondary-text) text-xs font-semibold">
                Heftin web dev
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-xs justify-between">
            <div>
              <p className="text-(--color-primary-text) mb-1 font-medium">
                Invoice number
              </p>
              <p className="text-(--color-secondary-text) font-semibold">
                #AB2324-01
              </p>
            </div>
            <div>
              <p className="text-(--color-primary-text) mb-1 font-medium">
                Reference
              </p>
              <p className="text-(--color-secondary-text) font-semibold">
                INV-057
              </p>
            </div>
            <div className="">
              <p className="text-(--color-primary-text) mb-1 font-medium">
                Invoice date
              </p>
              <p className="text-(--color-secondary-text) font-semibold">
                025 Oct, 2025
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-between">
            <div className="text-end text-xs">
              <p className="text-(--color-primary-text) mb-1 font-medium">
                Invoice of (USD)
              </p>
              <p
                className="font-bold text-2xl bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(130deg, #651FFF, #FF5A16)",
                }}
              >
                $4,950.00
              </p>
            </div>
            <div className="text-end text-xs">
              <p className="text-(--color-primary-text) mb-1 font-medium">
                Due date
              </p>
              <p className="text-(--color-secondary-text) font-semibold">
                15 Aug, 2025
              </p>
            </div>
          </div>
        </div>

        <div className="flex uppercase justify-between text-(--color-primary-text) text-[10px] font-semibold py-2 mt-6 border-y border-(--color-border)">
          <p className="w-1/2">Item Detail</p>
          <div className="w-1/2 flex justify-between">
            <p className="w-1/3 text-start">Qty</p>
            <p className="w-1/3 text-end">Rate</p>
            <p className="w-1/3 text-end">Amount</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-3 border-b border-(--color-border)">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-xs font-semibold"
            >
              <div className="w-1/2 gap-0.5">
                <p className="text-(--color-secondary-text)">{item?.name}</p>
                <p className="text-(--color-primary-text)">
                  {item?.description}
                </p>
              </div>
              <div className="w-1/2 flex justify-between text-(--color-secondary-text)">
                <p className="w-1/3 text-start">{item?.qty}</p>
                <p className="w-1/3 text-end">
                  $
                  {item?.rate?.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="w-1/3 text-end">
                  $
                  {item?.amount?.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-xs font-semibold mt-3">
          <div className="w-1/2"></div>
          <div className="w-1/2 text-(--color-secondary-text) flex justify-between">
            <p className="w-1/3 text-start">Subtotal</p>
            <p className="w-1/3 text-end">$4,500.00</p>
          </div>
        </div>
        <div className="flex justify-between text-xs text-(--color-secondary-color) font-semibold mt-3">
          <div className="w-1/2"></div>
          <div className="w-1/2 text-(--color-secondary-text) flex justify-between">
            <p className="w-1/3 text-start">Tax (10%)</p>
            <p className="w-1/3 text-end">$450.00</p>
          </div>
        </div>
        <div className="flex justify-between text-xs text-(--color-secondary-color) font-bold mt-3">
          <div className="w-1/2"></div>
          <div className="w-1/2 text-(--color-secondary-text) flex justify-between border-t border-(--color-border) pt-3">
            <p className="w-1/3 text-start">Total</p>
            <p className="w-1/3 text-end">$4,950.00</p>
          </div>
        </div>
      </div>
      <p className="text-(--color-secondary-text) text-start text-sm font-semibold">
        Thanks for the business.
      </p>
    </div>
  );
};

export default BillDetails;
