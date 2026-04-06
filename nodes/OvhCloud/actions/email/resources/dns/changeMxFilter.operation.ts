import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change DNS MX filter for an email domain.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/changeDnsMXFilter
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'MX Filter',
			name: 'mxFilter',
			type: 'string',
			default: '',
			required: true,
			description: 'The MX filter to apply',
			displayOptions,
		},
		{
			displayName: 'Custom Target',
			name: 'customTarget',
			type: 'string',
			default: '',
			description: 'Custom target for the MX filter',
			displayOptions,
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			description: 'Sub-domain to apply the filter to',
			displayOptions,
		},
	];
}

/**
 * Executes the Change DNS MX Filter operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const mxFilter = this.getNodeParameter('mxFilter', 0) as string;
	const body: IDataObject = { mxFilter };
	const customTarget = this.getNodeParameter('customTarget', 0, '') as string;
	const subDomain = this.getNodeParameter('subDomain', 0, '') as string;
	if (customTarget) body.customTarget = customTarget;
	if (subDomain) body.subDomain = subDomain;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/changeDnsMXFilter`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
