"use client"

export default function Demo() {

    return (
        <div className="flex flex-row">
            <div className="basis-1/3"></div>
            <div className="basis-1/3">
                <button 
                    className={
                    `
                    text-sm inline-flex min-w-[145px] justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 
                    `
                    }
                >
                    HIT ME
                </button>
            </div>
            <div className="basis-1/3"></div>
        </div>
    )

};