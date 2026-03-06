import { IDataObject, IExecuteFunctions, INodeProperties } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../../credentials/OvhCloudApi.credentials";

const showOnlyForMeBills = {
    resource: ['me'],
    operation: ['listBills'],
};

export const listBillsDescription: INodeProperties[] = [
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
        displayOptions: {
            show: showOnlyForMeBills,
        },
    },
    {
        displayName: "Date From",
        name: "dateFrom",
        type: "dateTime",
        default: "",
        description: "Filter bills from this date (inclusive)",
        displayOptions: {
            show: showOnlyForMeBills,
        },
    },
    {
        displayName: "Date To",
        name: "dateTo",
        type: "dateTime",
        default: "",
        description: "Filter bills up to this date (inclusive)",
        displayOptions: {
            show: showOnlyForMeBills,
        },
    },
    {
        displayName: "Order ID",
        name: "orderId",
        type: "string",
        default: "",
        description: "Filter bills related to this order ID",
        displayOptions: {
            show: showOnlyForMeBills,
        },
    }
];

export const getMethods = {};

export async function listBills(
    this: IExecuteFunctions,
    option: IDataObject = {}
) {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    let qs = {};

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

    const options = Object.assign(signRequestOptions.call(this, credentials, {
        method: 'GET',
        url: `/me/bill`,
        qs,
        json: true,
    }), option);

    const billIds = await this.helpers.httpRequestWithAuthentication.call(
        this,
        OvhCloudApiSecretName,
        options,
    );

    const bills = [];
    
    for (const billId of billIds) {
        const billData = await this.helpers.httpRequestWithAuthentication.call(
            this,
            OvhCloudApiSecretName,
            Object.assign(options, {
                url: `/me/bill/${billId}`,
            }),
        );

        bills.push(billData);
    }

    return bills;
};