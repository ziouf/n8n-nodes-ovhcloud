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
			displayName: 'Spare',
			name: 'spare',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your spare',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Spare operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/spare/{spare}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const spare = this.getNodeParameter('spare', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpDelete(
		'/telephony/spare/' + encodeURIComponent(spare),
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
