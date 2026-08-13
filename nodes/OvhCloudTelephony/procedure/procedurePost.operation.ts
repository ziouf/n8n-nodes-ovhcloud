import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'BIC',
			name: 'bic',
			type: 'string',
			default: '',
			description: "Account's BIC",
			displayOptions,
		},
		{
			displayName: 'IBAN',
			name: 'iban',
			type: 'string',
			default: '',
			description: "Account's IBAN",
			displayOptions,
		},
		{
			displayName: 'Owner Address',
			name: 'ownerAddress',
			type: 'string',
			default: '',
			description: "Account owner's address",
			displayOptions,
		},
		{
			displayName: 'Owner Name',
			name: 'ownerName',
			type: 'string',
			default: '',
			description: "Account owner's name",
			displayOptions,
		},
		{
			displayName: 'Payment Mean ID',
			name: 'paymentMeanID',
			type: 'string',
			default: '',
			description: 'The ID of your registered SEPA account payment mean',
			displayOptions,
		},
	];
}

/**
 * Executes the Post Procedure Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/procedure
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const bic = this.getNodeParameter('bic', _itemIndex) as string;
	const iban = this.getNodeParameter('iban', _itemIndex) as string;
	const ownerAddress = this.getNodeParameter('ownerAddress', _itemIndex) as string;
	const ownerName = this.getNodeParameter('ownerName', _itemIndex) as string;
	const paymentMeanID = this.getNodeParameter('paymentMeanID', _itemIndex) as string;

	const body: IDataObject = {
		bic: bic,
		iban: iban,
		ownerAddress: ownerAddress,
		ownerName: ownerName,
		paymentMeanID: paymentMeanID,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/procedure', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
