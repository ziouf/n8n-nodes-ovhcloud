import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the Datacenter',
			displayOptions,
		},
		{
			displayName: 'License',
			name: 'kmsLicense',
			type: 'options',
			options: [
				{ name: 'OVHcloud Managed', value: 'OVHcloud managed' },
				{ name: 'Unknown or Unsupported License', value: 'unknown or unsupported license' },
				{ name: 'Unlicensed Windows Guestos', value: 'unlicensed windows guestos' },
				{ name: 'Windows 2008 R2 Datacenter', value: 'windows 2008 R2 Datacenter' },
				{ name: 'Windows 2008 R2 Enterprise', value: 'windows 2008 R2 Enterprise' },
				{ name: 'Windows 2008 R2 Standard', value: 'windows 2008 R2 Standard' },
				{ name: 'Windows 2008 R2 Web', value: 'windows 2008 R2 Web' },
				{ name: 'Windows 2012 Datacenter', value: 'windows 2012 Datacenter' },
				{ name: 'Windows 2012 R2 Datacenter', value: 'windows 2012 R2 Datacenter' },
				{ name: 'Windows 2012 R2 Standard', value: 'windows 2012 R2 Standard' },
				{ name: 'Windows 2012 R2 Standard SQL2016 Standard', value: 'windows 2012 R2 Standard SQL2016 Standard' },
				{ name: 'Windows 2012 R2 Standard SQL2016 Web', value: 'windows 2012 R2 Standard SQL2016 Web' },
				{ name: 'Windows 2012 Standard', value: 'windows 2012 Standard' },
				{ name: 'Windows 2016 Datacenter', value: 'windows 2016 Datacenter' },
				{ name: 'Windows 2016 Standard', value: 'windows 2016 Standard' },
				{ name: 'Windows 2016 Standard SQL2016 Standard', value: 'windows 2016 Standard SQL2016 Standard' },
				{ name: 'Windows 2016 Standard SQL2016 Web', value: 'windows 2016 Standard SQL2016 Web' },
				{ name: 'Windows 2019 Datacenter', value: 'windows 2019 Datacenter' },
				{ name: 'Windows 2019 Datacenter Core', value: 'windows 2019 Datacenter Core' },
				{ name: 'Windows 2019 Standard', value: 'windows 2019 Standard' },
				{ name: 'Windows 2019 Standard Core', value: 'windows 2019 Standard Core' },
				{ name: 'Windows 2019 Standard SQL2019 Standard', value: 'windows 2019 Standard SQL2019 Standard' },
				{ name: 'Windows 2019 Standard SQL2019 Web', value: 'windows 2019 Standard SQL2019 Web' },
				{ name: 'Windows 2019 Standard SQL2022 Standard', value: 'windows 2019 Standard SQL2022 Standard' },
				{ name: 'Windows 2019 Standard SQL2022 Web', value: 'windows 2019 Standard SQL2022 Web' },
				{ name: 'Windows 2022 Datacenter', value: 'windows 2022 Datacenter' },
				{ name: 'Windows 2022 Datacenter Core', value: 'windows 2022 Datacenter Core' },
				{ name: 'Windows 2022 Datacenter SQL2019 Standard', value: 'windows 2022 Datacenter SQL2019 Standard' },
				{ name: 'Windows 2022 Datacenter SQL2019 Web', value: 'windows 2022 Datacenter SQL2019 Web' },
				{ name: 'Windows 2022 Datacenter SQL2022 Standard', value: 'windows 2022 Datacenter SQL2022 Standard' },
				{ name: 'Windows 2022 Datacenter SQL2022 Web', value: 'windows 2022 Datacenter SQL2022 Web' },
				{ name: 'Windows 2022 Standard', value: 'windows 2022 Standard' },
				{ name: 'Windows 2022 Standard Core', value: 'windows 2022 Standard Core' },
				{ name: 'Windows 2022 Standard SQL2019 Standard', value: 'windows 2022 Standard SQL2019 Standard' },
				{ name: 'Windows 2022 Standard SQL2019 Web', value: 'windows 2022 Standard SQL2019 Web' },
				{ name: 'Windows 2022 Standard SQL2022 Standard', value: 'windows 2022 Standard SQL2022 Standard' },
				{ name: 'Windows 2022 Standard SQL2022 Web', value: 'windows 2022 Standard SQL2022 Web' },
				{ name: 'Windows 2025 Datacenter', value: 'windows 2025 Datacenter' },
				{ name: 'Windows 2025 Datacenter Core', value: 'windows 2025 Datacenter Core' },
				{ name: 'Windows 2025 Datacenter SQL2022 Enterprise', value: 'windows 2025 Datacenter SQL2022 Enterprise' },
				{ name: 'Windows 2025 Datacenter SQL2022 Standard', value: 'windows 2025 Datacenter SQL2022 Standard' },
				{ name: 'Windows 2025 Datacenter SQL2022 Web', value: 'windows 2025 Datacenter SQL2022 Web' },
				{ name: 'Windows 2025 Standard', value: 'windows 2025 Standard' },
				{ name: 'Windows 2025 Standard Core', value: 'windows 2025 Standard Core' },
				{ name: 'Windows 2025 Standard SQL2022 Standard', value: 'windows 2025 Standard SQL2022 Standard' },
				{ name: 'Windows 2025 Standard SQL2022 Web', value: 'windows 2025 Standard SQL2022 Web' },
			],
			default: 'OVHcloud managed',
			description: 'Only display virtual machines with this license',
			displayOptions,
		},
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions,
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
			displayOptions: {
				show: {
					returnAll: [false],
				},
			},
		},
	];
}

/**
 * Executes the Get virtual machines with managed license operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vmLicensed
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const datacenterId = this.getNodeParameter('datacenterId', itemIndex) as string;
	const kmsLicense = this.getNodeParameter('kmsLicense', itemIndex, '') as string;
	const qs: IDataObject = {};
	if (kmsLicense !== '') { qs.kmsLicense = kmsLicense; }
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/vmLicensed`, qs)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
