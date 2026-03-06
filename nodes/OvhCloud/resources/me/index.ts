import { IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { getDescription, getMe } from "./get";
import { listBills, listBillsDescription } from "./listBills";
import { getDebtAccount, getDebtAccountDescription } from "./debtAccount";


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
                value: 'listBills',
                action: 'List all available bills for the authenticated user',
            },
            {
                name: 'Debt Account',
                value: 'debtAccount',
                action: 'Get details about debt account',
            },
        ],
        default: 'get',
    },
    ...getDescription,
    ...listBillsDescription,
    ...getDebtAccountDescription,
]

export const meMethods = {};

export async function meExecute(
    this: IExecuteFunctions
): Promise<INodeExecutionData[][]> {
    const operation = this.getNodeParameter('operation', 0);

    switch (operation) {
        case 'get':
            return [this.helpers.returnJsonArray(await getMe.call(this))];
        case 'listBills':
            return [this.helpers.returnJsonArray(await listBills.call(this))];
        case 'debtAccount':
            return [this.helpers.returnJsonArray(await getDebtAccount.call(this))];
    }

    throw new Error(`Unsupported operation "${operation}" for resource "me"`);
}
