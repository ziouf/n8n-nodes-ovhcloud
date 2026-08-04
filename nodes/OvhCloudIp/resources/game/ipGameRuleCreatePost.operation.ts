import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	{
		displayName: 'Ip',
		name: 'ip',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP block identifier (e.g. 1.2.3.4/32)',
		displayOptions,
	},
	{
		displayName: 'Ip On Game',
		name: 'ipOnGame',
		type: 'string',
		default: '',
		required: true,
		description: 'IP under game anti-ddos',
		displayOptions,
	},
	{
		displayName: 'Ports',
		name: 'ports',
		type: 'string',
		default: '',
		required: true,
		description: 'The UDP port range to apply the rule on (e.g. 27015 or 27015-27030)',
		displayOptions,
	},
	{
		displayName: 'Protocol',
		name: 'protocol',
		type: 'options',
		options: [
			{ name: 'arkSurvivalAscended', value: 'arkSurvivalAscended' },
			{ name: 'arkSurvivalEvolved', value: 'arkSurvivalEvolved' },
			{ name: 'arkSurvivalEvolvedV311.78+', value: 'arkSurvivalEvolvedV311.78+' },
			{ name: 'Arma', value: 'arma' },
			{ name: 'counterStrike2', value: 'counterStrike2' },
			{ name: 'fiveM', value: 'fiveM' },
			{ name: 'gtaMultiTheftAutoSanAndreas', value: 'gtaMultiTheftAutoSanAndreas' },
			{ name: 'gtaSanAndreasMultiplayerMod', value: 'gtaSanAndreasMultiplayerMod' },
			{ name: 'hl2Source', value: 'hl2Source' },
			{ name: 'minecraftBedrockWithRacknetCookie', value: 'minecraftBedrockWithRacknetCookie' },
			{ name: 'minecraftJava', value: 'minecraftJava' },
			{ name: 'minecraftPocketEdition', value: 'minecraftPocketEdition' },
			{ name: 'minecraftQuery', value: 'minecraftQuery' },
			{ name: 'Mumble', value: 'mumble' },
			{ name: 'Other', value: 'other' },
			{ name: 'Rust', value: 'rust' },
			{ name: 'Teamspeak2', value: 'teamspeak2' },
			{ name: 'Teamspeak3', value: 'teamspeak3' },
			{ name: 'trackmaniaShootmania', value: 'trackmaniaShootmania' },
			{ name: 'Valheim', value: 'valheim' },
		],
		default: 'other',
		required: true,
		description: 'The protocol running behind the given port(s)',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Add Game Rule operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/game/{ipOnGame}/rule
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const ipOnGame = this.getNodeParameter('ipOnGame', itemIndex) as string;

	const ports = (this.getNodeParameter('ports', itemIndex) as string) || '';
	const protocol = (this.getNodeParameter('protocol', itemIndex) as string) || '';

	const body: IDataObject = {};
	body.ports = ports;
	body.protocol = protocol;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/game/${encodeURIComponent(ipOnGame)}/rule`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
