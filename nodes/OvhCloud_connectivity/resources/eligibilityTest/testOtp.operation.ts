import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Test eligibility with OTP.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/test/otp
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OTP',
			name: 'otp',
			type: 'string',
			default: '',
			required: true,
			description: 'The one-time password',
			displayOptions,
		},
	];
}

/**
 * Executes the Test OTP operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		otp: this.getNodeParameter('otp', 0) as string,
	};
	const data = (await client.httpPost('/connectivity/eligibility/test/otp', {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
