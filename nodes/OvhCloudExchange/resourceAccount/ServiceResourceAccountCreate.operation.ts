import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			description: 'meeting organizer\'s name is used as the subject of the meeting request',
		},
		{
			displayName: 'Allow Conflict',
			name: 'allowConflict',
			type: 'string',
			default: '',
			description: 'resource can be scheduled by more than one person during the same time period',
		},
		{
			displayName: 'Booking Window',
			name: 'bookingWindow',
			type: 'string',
			default: '',
			description: 'maximum number of days in advance that the resource can be reserved',
		},
		{
			displayName: 'Capacity',
			name: 'capacity',
			type: 'string',
			default: '',
			required: true,
			description: 'number of the same equipment or capacity of a room',
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
			description: 'remove any text in the message body of incoming meeting requests on resourceAccount',
		},
		{
			displayName: 'Delete Subject',
			name: 'deleteSubject',
			type: 'string',
			default: '',
			description: 'remove email subject of incoming meeting requests on resourceAccount',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'resource account display name',
		},
		{
			displayName: 'Location',
			name: 'location',
			type: 'string',
			default: '',
			description: 'resource location',
		},
		{
			displayName: 'Maximum Duration',
			name: 'maximumDuration',
			type: 'string',
			default: '',
			description: 'maximum duration in minutes for meeting requests',
		},
		{
			displayName: 'Resource Email Address',
			name: 'resourceEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'resource address',
		},
		{
			displayName: 'Show Meeting Details',
			name: 'showMeetingDetails',
			type: 'string',
			default: '',
			description: 'granted right on a calendar of that resourceAccount',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'type of your reservation',
		},
	];
}

/**
 * create new resource account in exchange server
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/resourceAccount
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const addOrganizerToSubject = this.getNodeParameter('addOrganizerToSubject', 0) as any;
	const allowConflict = this.getNodeParameter('allowConflict', 0) as any;
	const bookingWindow = this.getNodeParameter('bookingWindow', 0) as any;
	const capacity = this.getNodeParameter('capacity', 0) as any;
	const company = this.getNodeParameter('company', 0) as any;
	const deleteComments = this.getNodeParameter('deleteComments', 0) as any;
	const deleteSubject = this.getNodeParameter('deleteSubject', 0) as any;
	const displayName = this.getNodeParameter('displayName', 0) as any;
	const location = this.getNodeParameter('location', 0) as any;
	const maximumDuration = this.getNodeParameter('maximumDuration', 0) as any;
	const resourceEmailAddress = this.getNodeParameter('resourceEmailAddress', 0) as any;
	const showMeetingDetails = this.getNodeParameter('showMeetingDetails', 0) as any;
	const type = this.getNodeParameter('type', 0) as any;

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

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/resourceAccount", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
