import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Queue ID',
			name: 'queueId',
			type: 'string',
			default: '',
			required: true,
			description: 'The queueId parameter',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Action On Closure',
			name: 'actionOnClosure',
			type: 'string',
			default: '',
			description: 'Action executed when there is no member in queue',
			displayOptions,
		},
		{
			displayName: 'Action On Closure Param',
			name: 'actionOnClosureParam',
			type: 'string',
			default: '',
			description: 'The additionnal parameter of the on closure action',
			displayOptions,
		},
		{
			displayName: 'Action On Overflow',
			name: 'actionOnOverflow',
			type: 'string',
			default: '',
			description: 'Action executed when caller enters a full queue',
			displayOptions,
		},
		{
			displayName: 'Action On Overflow Param',
			name: 'actionOnOverflowParam',
			type: 'string',
			default: '',
			description: 'The additionnal parameter of the overflow action',
			displayOptions,
		},
		{
			displayName: 'Ask For Record Disabling',
			name: 'askForRecordDisabling',
			type: 'string',
			default: '',
			description: 'Whether Allow the caller to disable call record by pressing a key',
			displayOptions,
		},
		{
			displayName: 'Confirm Key',
			name: 'confirmKey',
			type: 'string',
			default: '',
			description: 'The key that tells the IVR that digit-entry is finished. Also used as a "repeat" key in the menus when no input is expected.',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'The name of the queue',
			displayOptions,
		},
		{
			displayName: 'Follow Call Forwards',
			name: 'followCallForwards',
			type: 'string',
			default: '',
			description: 'Whether Follow the calls forwarding',
			displayOptions,
		},
		{
			displayName: 'Max Member',
			name: 'maxMember',
			type: 'string',
			default: '',
			description: 'The maximum of people waiting in the queue',
			displayOptions,
		},
		{
			displayName: 'Max Wait Time',
			name: 'maxWaitTime',
			type: 'string',
			default: '',
			description: 'The maximum waiting time (in seconds) in the queue',
			displayOptions,
		},
		{
			displayName: 'Record',
			name: 'record',
			type: 'string',
			default: '',
			description: 'Whether Enable record on calls in queue',
			displayOptions,
		},
		{
			displayName: 'Record Disabling Digit',
			name: 'recordDisablingDigit',
			type: 'string',
			default: '',
			description: 'Key to press to disable record',
			displayOptions,
		},
		{
			displayName: 'Record Disabling Language',
			name: 'recordDisablingLanguage',
			type: 'string',
			default: '',
			description: 'Language of the sound played to the caller to inform that he can disable record',
			displayOptions,
		},
		{
			displayName: 'Sound On Hold',
			name: 'soundOnHold',
			type: 'string',
			default: '',
			description: 'The ID of the OvhPabxSound played to caller when on hold',
			displayOptions,
		},
		{
			displayName: 'Strategy',
			name: 'strategy',
			type: 'string',
			default: '',
			description: 'The calls dispatching strategy',
			displayOptions,
		},
	];
}

/**
 * Executes the EasyHuntingHuntingQueuePut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/easyHunting/{serviceName}/hunting/queue/{queueId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const queueId = this.getNodeParameter('queueId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const actionOnClosure = this.getNodeParameter('actionOnClosure', _itemIndex) as string;
	const actionOnClosureParam = this.getNodeParameter('actionOnClosureParam', _itemIndex) as string;
	const actionOnOverflow = this.getNodeParameter('actionOnOverflow', _itemIndex) as string;
	const actionOnOverflowParam = this.getNodeParameter('actionOnOverflowParam', _itemIndex) as string;
	const askForRecordDisabling = this.getNodeParameter('askForRecordDisabling', _itemIndex) as string;
	const confirmKey = this.getNodeParameter('confirmKey', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const followCallForwards = this.getNodeParameter('followCallForwards', _itemIndex) as string;
	const maxMember = this.getNodeParameter('maxMember', _itemIndex) as string;
	const maxWaitTime = this.getNodeParameter('maxWaitTime', _itemIndex) as string;
	const record = this.getNodeParameter('record', _itemIndex) as string;
	const recordDisablingDigit = this.getNodeParameter('recordDisablingDigit', _itemIndex) as string;
	const recordDisablingLanguage = this.getNodeParameter('recordDisablingLanguage', _itemIndex) as string;
	const soundOnHold = this.getNodeParameter('soundOnHold', _itemIndex) as string;
	const strategy = this.getNodeParameter('strategy', _itemIndex) as string;

	const body: IDataObject = {
		actionOnClosure: actionOnClosure,
		actionOnClosureParam: actionOnClosureParam,
		actionOnOverflow: actionOnOverflow,
		actionOnOverflowParam: actionOnOverflowParam,
		askForRecordDisabling: askForRecordDisabling,
		confirmKey: confirmKey,
		description: description,
		followCallForwards: followCallForwards,
		maxMember: maxMember,
		maxWaitTime: maxWaitTime,
		record: record,
		recordDisablingDigit: recordDisablingDigit,
		recordDisablingLanguage: recordDisablingLanguage,
		soundOnHold: soundOnHold,
		strategy: strategy,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/easyHunting' + '/' + encodeURIComponent(serviceName) + '/hunting' + '/queue' + '/' + encodeURIComponent(queueId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
