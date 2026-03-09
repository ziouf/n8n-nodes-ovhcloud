import { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiClient } from "../../../shared/OvhCloudApiClient";

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: "Category",
            name: "category",
            description: "Filter bills by category",
            type: "options",
            options: [
                { name: "All", value: "" },
                { name: 'Autorenew', value: "autorenew" },
                { name: "Earlyrenewal", value: "earlyrenewal" },
                { name: "Purchase", value: "purchase" },
                { name: "Purchase Cloud", value: "purchase-cloud" },
                { name: "Purchase Servers", value: "purchase-servers" },
                { name: "Purchase Telecom", value: "purchase-telecom" },
                { name: "Purchase Web", value: "purchase-web" },
            ],
            default: "",
            displayOptions,
        },
        {
            displayName: "Date From",
            name: "dateFrom",
            type: "dateTime",
            default: "",
            description: "Filter bills from this date (inclusive)",
            displayOptions,
        },
        {
            displayName: "Date To",
            name: "dateTo",
            type: "dateTime",
            default: "",
            description: "Filter bills up to this date (inclusive)",
            displayOptions,
        },
        {
            displayName: "Order ID",
            name: "orderId",
            type: "string",
            default: "",
            description: "Filter bills related to this order ID",
            displayOptions,
        }
    ];
}


export async function execute(
    this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    
    let qs: IDataObject = {};

    const category = this.getNodeParameter('category', 0, { extractValue: true }) as string;
    if (category?.length > 0) {
        qs = Object.assign(qs, { category });
    }
    const dateFrom = this.getNodeParameter('dateFrom', 0, { extractValue: true }) as string;
    if (dateFrom?.length > 0) {
        qs = Object.assign(qs, { 'date.from': dateFrom });
    }
    const dateTo = this.getNodeParameter('dateTo', 0, { extractValue: true }) as string;
    if (dateTo?.length > 0) {
        qs = Object.assign(qs, { 'date.to': dateTo });
    }
    const orderId = this.getNodeParameter('orderId', 0, { extractValue: true }) as string;
    if (orderId?.length > 0) {
        qs = Object.assign(qs, { orderId });
    }

    const billIDs = await client.httpGet(`/me/bill`, qs) as string[];
    const bills = [];

    for (const billID of billIDs) {
        const billData = await client.httpGet(`/me/bill/${billID}`);
        bills.push(billData);
    }

    return bills;
};