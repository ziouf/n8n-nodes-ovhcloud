import { IExecuteFunctions, INodeExecutionData, INodeProperties, IDisplayOptions } from "n8n-workflow";
import { 
    description as descriptionMe,
    execute as executeMe,
} from "./me";
import { 
    description as descriptionBill,
    execute as executeBill
 } from "./bill/index";
import { 
    description as descriptionDebtAccount,
    execute as executeDebtAccount,
} from "./debtAccount/index";
import {
    description as descriptionOrder,
    execute as executeOrder,
} from "./order/index";


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
        // Me operations
        ...descriptionMe({ show: {...displayOptions.show, subResource: ['me'] } }),
        ...descriptionBill({ show: {...displayOptions.show, subResource: ['bills'] } }),
        ...descriptionDebtAccount({ show: {...displayOptions.show, subResource: ['debtAccount'] } }),
        ...descriptionOrder({ show: {...displayOptions.show, subResource: ['orders'] } }),
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
