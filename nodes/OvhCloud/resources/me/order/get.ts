import { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiClient } from "../../../shared/OvhCloudApiClient";

export function getDescription(displayOptions: IDisplayOptions): INodeProperties[] {
    return [
        {
            displayName: 'From Date',
            name: 'fromDate',
            type: 'dateTime',
            default: '',
            description: 'Filter orders created after this date',
            displayOptions,
        },
        {
            displayName: 'To Date',
            name: 'toDate',
            type: 'dateTime',
            default: '',
            description: 'Filter orders created before this date',
            displayOptions,
        },
    ]
}

export async function execute(
    this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    
    const fromDate = this.getNodeParameter('fromDate', 0) as string;
    const toDate = this.getNodeParameter('toDate', 0) as string;
    
    let qs: IDataObject = {};
    if (fromDate) {
        qs = Object.assign(qs, { 'date.from': fromDate });
    }

    if (toDate) {
        qs = Object.assign(qs, { 'date.to': toDate });
    }

    const orderIDs = await client.httpGet(`/me/order`, qs);
    const detailedOrders: INodeExecutionData[] = [];

    for (const orderId of orderIDs) {
        const orderDetails = await client.httpGet(`/me/order/${orderId}`);
        detailedOrders.push(orderDetails);
    }

    return detailedOrders;
}