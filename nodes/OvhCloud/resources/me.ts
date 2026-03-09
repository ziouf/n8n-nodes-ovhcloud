import { IExecuteFunctions, INodeExecutionData, INodeProperties, IDisplayOptions, IDataObject, NodeParameterValueType } from "n8n-workflow";
import { OvhCloudApiClient } from "../shared/OvhCloudApiClient";


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'Sub-Resource',
            name: 'subResource',
            type: 'options',
            noDataExpression: true,
            displayOptions,
            options: [
                {
                    name: 'Me',
                    value: 'me',
                    action: 'Operations about the authenticated user',
                },
                {
                    name: 'Bills',
                    value: 'bills',
                    action: 'Operations about bills',
                },
                {
                    name: 'Debt Account',
                    value: 'debtAccount',
                    action: 'Operations about debt account',
                },
                {
                    name: 'Orders',
                    value: 'orders',
                    action: 'Operations about orders',
                },
            ],
            default: 'me',
        },

        /* Me options */
        {
            displayName: 'Operation',
            name: 'meOperation',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'Get My Info',
                    value: 'get',
                    action: 'Get information about the authenticated user',
                },
            ],
            default: 'get',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['me'],
                },
            },
        },

        /* Bill options */
        {
            displayName: 'Bill Operation',
            name: 'billOperation',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'List Bills',
                    value: 'list',
                    action: 'List bills',
                },
                {
                    name: 'Get Bill',
                    value: 'get',
                    action: 'Get a specific bill',
                },
            ],
            default: 'list',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['bills'],
                },
            },
        },
        {
            displayName: "Category",
            name: "billCategory",
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
                show: {
                    ...displayOptions.show,
                    subResource: ['bills'],
                    billOperation: ['list'],
                },
            },
        },
        {
            displayName: "Order ID",
            name: "billOrderId",
            type: "number",
            default: 0,
            description: "Filter bills related to this order ID",
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['bills'],
                    billOperation: ['list'],
                },
            },
        },
        {
            displayName: "Bill ID",
            name: "billId",
            type: "string",
            default: "",
            required: true,
            description: "Filter bills related to this bill ID",
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['bills'],
                    billOperation: ['get'],
                },
            },
        },

        /* Debt account options */
        {
            displayName: 'Debt Account Operation',
            name: 'debtAccountOperation',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'Get Debt Account',
                    value: 'get',
                    action: 'Get information about the debt account of the authenticated user',
                },
            ],
            default: 'get',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['debtAccount'],
                },
            },
        },

        /* Order options */
        {
            displayName: 'Order Operation',
            name: 'orderOperation',
            type: 'options',
            noDataExpression: true,
            options: [
                {
                    name: 'List Orders',
                    value: 'list',
                    action: 'List all orders',
                },
                {
                    name: 'Get Order',
                    value: 'get',
                    action: 'Get a specific order by ID',
                },
            ],
            default: 'get',
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['orders'],
                },
            },
        },
        {
            displayName: "Order ID",
            name: "orderId",
            type: "string",
            default: "",
            required: true,
            description: "Filter orders related to this order ID",
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['orders'],
                    orderOperation: ['get'],
                },
            },
        },


        /* Common filters */
        {
            displayName: "Date From",
            name: "dateFrom",
            type: "dateTime",
            default: null,
            description: "Filter from this date (inclusive)",
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['bills', 'orders'],
                    billOperation: ['list'],
                    orderOperation: ['list'],
                },
            },
        },
        {
            displayName: "Date To",
            name: "dateTo",
            type: "dateTime",
            default: null,
            description: "Filter up to this date (inclusive)",
            displayOptions: {
                show: {
                    ...displayOptions.show,
                    subResource: ['bills', 'orders'],
                    billOperation: ['list'],
                    orderOperation: ['list'],
                },
            },
        },
    ];
}

export const methodsListSearch = {};

export async function execute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[]> {
    const subResource = this.getNodeParameter('subResource', 0);

    switch (subResource) {
        case 'me':
            return executeMe.call(this);
        case 'bills':
            return executeBill.call(this);
        case 'debtAccount':
            return executeDebtAccount.call(this);
        case 'orders':
            return executeOrder.call(this);
    }
    throw new Error(`Unsupported operation "${subResource}" for resource "me"`);
}

async function executeMe(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const operation = this.getNodeParameter('meOperation', 0, { extractValue: true });

    switch (operation) {
        case 'get':
            return await client.httpGet(`/me`);
    }

    throw new Error('The resource "me" cannot be executed directly. Please select an operation to execute.');
}

async function executeBill(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('billOperation', 0, { extractValue: true });
    const billId = this.getNodeParameter('billId', 0, { extractValue: true });

    switch (operation) {
        case 'list':
            return executeBillList.call(this);
        case 'get':
            return [await executeBillGet.call(this, billId)];
    }

    throw new Error('The resource "bill" cannot be executed directly. Please select an operation to execute.');
}

async function executeBillList(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);

    let qs: IDataObject = {};
    const category = this.getNodeParameter('billCategory', 0, { extractValue: true }) as string;
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
    const orderId = this.getNodeParameter('billOrderId', 0, { extractValue: true }) as number;
    if (orderId > 0) {
        qs = Object.assign(qs, { orderId });
    }
    
    const billIDs = await client.httpGet(`/me/bill`, qs) as string[];
    const bills = [];

    for (const billID of billIDs) {
        const bill = await executeBillGet.call(this, billID);
        bills.push(bill)
    }

    return bills;
}

async function executeBillGet(this: IExecuteFunctions, billID: object | NodeParameterValueType): Promise<INodeExecutionData> {
    const client = new OvhCloudApiClient(this);
    return await client.httpGet(`/me/bill/${billID}`);
}

async function executeDebtAccount(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    const operation = this.getNodeParameter('debtAccountOperation', 0, { extractValue: true });

    switch (operation) {
        case 'get':
            return [await client.httpGet(`/me/debtAccount`)];
    }

    throw new Error('The resource "debtAccount" cannot be executed directly. Please select an operation to execute.');
}

async function executeOrder(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const operation = this.getNodeParameter('orderOperation', 0, { extractValue: true });
    const orderId = this.getNodeParameter('orderId', 0, { extractValue: true }) as string;

    switch (operation) {
        case 'list':
            return await executeOrderList.call(this);
        case 'get':
            return [await executeOrderGet.call(this, orderId)];
    }
    
    throw new Error('The resource "order" cannot be executed directly. Please select an operation to execute.');
}

async function executeOrderList(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    let qs: IDataObject = {};
    const dateFrom = this.getNodeParameter('dateFrom', 0, { extractValue: true }) as string;
    if (dateFrom?.length > 0) {
        qs = Object.assign(qs, { 'date.from': dateFrom });
    }
    const dateTo = this.getNodeParameter('dateTo', 0, { extractValue: true }) as string;
    if (dateTo?.length > 0) {
        qs = Object.assign(qs, { 'date.to': dateTo });
    }

    const orderIds = await client.httpGet(`/me/order`, qs) as string[];
    
    const orders = [];
    for (const orderId of orderIds) {
        const order = await executeOrderGet.call(this, orderId);
        orders.push(order)
    }
    return orders;
}

async function executeOrderGet(this: IExecuteFunctions, orderId: object | NodeParameterValueType): Promise<INodeExecutionData> {
    const client = new OvhCloudApiClient(this);
    return await client.httpGet(`/me/order/${orderId}`);
}