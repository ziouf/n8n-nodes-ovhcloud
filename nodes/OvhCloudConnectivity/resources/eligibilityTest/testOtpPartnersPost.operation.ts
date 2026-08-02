import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OTP',
			name: 'otp',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the OTP',
			displayOptions,
		},
	];
}

/**
 * Run an eligibility test by OTP, reserved for partners.
 *
 * HTTP method: POST
 * Endpoint: /connectivity/eligibility/test/otp/partners
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const otp = (this.getNodeParameter('otp', 0, '') as string) || '';

	const body: IDataObject = {};
	if (otp) body.otp = otp;

	const data = (await client.httpPost(`/connectivity/eligibility/test/otp/partners`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
