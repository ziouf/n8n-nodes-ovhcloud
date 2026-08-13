import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Add Organizer To Subject',
			name: 'addOrganizerToSubject',
			type: 'string',
			default: '',
			description: 'Meeting organizer\'s name is used as the subject of the meeting request',
		},
		{
			displayName: 'Allow Conflict',
			name: 'allowConflict',
			type: 'string',
			default: '',
			description: 'Resource can be scheduled by more than one person during the same time period',
		},
		{
			displayName: 'Booking Window',
			name: 'bookingWindow',
			type: 'string',
			default: '',
			description: 'Maximum number of days in advance that the resource can be reserved',
		},
		{
			displayName: 'Capacity',
			name: 'capacity',
			type: 'string',
			default: '',
			required: true,
			description: 'Number of the same equipment or capacity of a room',
		},
		{
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'Company name',
		},
		{
			displayName: 'Delete Comments',
			name: 'deleteComments',
			type: 'string',
			default: '',
			description: 'Remove any text in the message body of incoming meeting requests on resourceAccount',
		},
		{
			displayName: 'Delete Subject',
			name: 'deleteSubject',
			type: 'string',
			default: '',
			description: 'Remove email subject of incoming meeting requests on resourceAccount',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Resource account display name',
		},
		{
			displayName: 'Location',
			name: 'location',
			type: 'string',
			default: '',
			description: 'Resource location',
		},
		{
			displayName: 'Maximum Duration',
			name: 'maximumDuration',
			type: 'string',
			default: '',
			description: 'Maximum duration in minutes for meeting requests',
		},
		{
			displayName: 'Resource Email Address',
			name: 'resourceEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Resource address',
		},
		{
			displayName: 'Show Meeting Details',
			name: 'showMeetingDetails',
			type: 'string',
			default: '',
			description: 'Granted right on a calendar of that resourceAccount',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'Type of your reservation',
		},
	];
}

/**
 * create new resource account in exchange server
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const addOrganizerToSubject = this.getNodeParameter('addOrganizerToSubject', _itemIndex ?? 0) as string;
	const allowConflict = this.getNodeParameter('allowConflict', _itemIndex ?? 0) as string;
	const bookingWindow = this.getNodeParameter('bookingWindow', _itemIndex ?? 0) as string;
	const capacity = this.getNodeParameter('capacity', _itemIndex ?? 0) as string;
	const company = this.getNodeParameter('company', _itemIndex ?? 0) as string;
	const deleteComments = this.getNodeParameter('deleteComments', _itemIndex ?? 0) as string;
	const deleteSubject = this.getNodeParameter('deleteSubject', _itemIndex ?? 0) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex ?? 0) as string;
	const location = this.getNodeParameter('location', _itemIndex ?? 0) as string;
	const maximumDuration = this.getNodeParameter('maximumDuration', _itemIndex ?? 0) as string;
	const resourceEmailAddress = this.getNodeParameter('resourceEmailAddress', _itemIndex ?? 0) as string;
	const showMeetingDetails = this.getNodeParameter('showMeetingDetails', _itemIndex ?? 0) as string;
	const type = this.getNodeParameter('type', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    addOrganizerToSubject: addOrganizerToSubject,
    allowConflict: allowConflict,
    bookingWindow: bookingWindow,
    capacity: capacity,
    company: company,
    deleteComments: deleteComments,
    deleteSubject: deleteSubject,
    displayName: displayName,
    location: location,
    maximumDuration: maximumDuration,
    resourceEmailAddress: resourceEmailAddress,
    showMeetingDetails: showMeetingDetails,
    type: type
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/resourceAccount", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
