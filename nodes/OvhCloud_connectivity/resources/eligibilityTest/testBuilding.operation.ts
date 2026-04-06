import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Test eligibility for a building.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/test/building
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Building',
			name: 'building',
			type: 'string',
			default: '',
			required: true,
			description: 'The building identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Test Building operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		building: this.getNodeParameter('building', 0) as string,
	};
	const data = (await client.httpPost('/connectivity/eligibility/test/building', {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
