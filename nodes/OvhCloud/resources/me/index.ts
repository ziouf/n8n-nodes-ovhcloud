import { IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { getDescription, getMe } from "./get";
import { listBill, listBillsDescription } from "./listBill";
import { getDebtAccount, getDebtAccountDescription } from "./debtAccount";
import { getOrder, getOrderDescription } from "./getOrder";


const showOnlyForMe = {
    resource: ['me'],
};

export const meDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForMe,
        },
        options: [
            {
                name: 'Get Me',
                value: 'get',
                action: 'Get details about the authenticated user',
            },
            {
                name: 'List Bills',
                value: 'listBill',
                action: 'List all available bills',
            },
            {
                name: 'Get Debt Account',
                value: 'getDebtAccount',
                action: 'Get details about debt account',
            },
            {
                name: 'Get Order',
                value: 'getOrder',
                action: 'Get details about orders',
            },
        ],
        default: 'get',
    },
    ...getDescription,
    ...listBillsDescription,
    ...getDebtAccountDescription,
    ...getOrderDescription,
]

export const meMethods = {};

export async function meExecute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[][]> {
    const operation = this.getNodeParameter('operation', 0);

    switch (operation) {
        case 'get':
            return [this.helpers.returnJsonArray(await getMe.call(this))];
        case 'listBill':
            return [this.helpers.returnJsonArray(await listBill.call(this))];
        case 'getDebtAccount':
            return [this.helpers.returnJsonArray(await getDebtAccount.call(this))];
        case 'getOrder':
            return [this.helpers.returnJsonArray(await getOrder.call(this))];
    }

    throw new Error(`Unsupported operation "${operation}" for resource "me"`);
}
