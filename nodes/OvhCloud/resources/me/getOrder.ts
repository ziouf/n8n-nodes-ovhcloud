import { IDataObject, IExecuteFunctions, INodeProperties } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../../credentials/OvhCloudApi.credentials";

const showOnlyForMeOrder = {
    resource: ['me'],
    operation: ['getOrder'],
};

export const getOrderDescription: INodeProperties[] = [
    {
        displayName: 'From Date',
        name: 'fromDate',
        type: 'dateTime',
        default: '',
        description: 'Filter orders created after this date',
        displayOptions: {
            show: showOnlyForMeOrder,
        },
    },
    {
        displayName: 'To Date',
        name: 'toDate',
        type: 'dateTime',
        default: '',
        description: 'Filter orders created before this date',
        displayOptions: {
            show: showOnlyForMeOrder,
        },
    },
];

export async function getOrder(
    this: IExecuteFunctions,
    option: IDataObject = {}
): Promise<IDataObject[]> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    
    const fromDate = this.getNodeParameter('fromDate', 0) as string;
    const toDate = this.getNodeParameter('toDate', 0) as string;
    
    let qs = {};
    if (fromDate) {
        qs = Object.assign(qs, { 'date.from': fromDate });
    }

    if (toDate) {
        qs = Object.assign(qs, { 'date.to': toDate });
    }

    const options = Object.assign(signRequestOptions.call(this, credentials, {
        method: 'GET',
        url: `/me/order`,
        qs,
        json: true,
    }), option);

    const orderIDs = await this.helpers.httpRequestWithAuthentication.call(
        this,
        OvhCloudApiSecretName,
        options,
    );

    const detailedOrders: IDataObject[] = [];

    for (const orderId of orderIDs) {
        const orderDetails = await this.helpers.httpRequestWithAuthentication.call(
            this,
            OvhCloudApiSecretName,
            Object.assign(signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/me/order/${orderId}`,
                json: true,
            }), option)
        );

        detailedOrders.push(orderDetails);
    }

    return detailedOrders;
}