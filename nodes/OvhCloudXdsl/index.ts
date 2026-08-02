import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// main operations
import * as list from './resources/main/list.operation';
import * as get from './resources/main/get.operation';
import * as updatePut from './resources/main/updatePut.operation';
import * as extraIpRangeGet from './resources/main/extraIpRangeGet.operation';
import * as extraIpRangeMovePost from './resources/main/extraIpRangeMovePost.operation';
import * as antiSpamsGet from './resources/main/antiSpamsGet.operation';
import * as antiSpamDetailGet from './resources/main/antiSpamDetailGet.operation';
import * as antiSpamEvidencesGet from './resources/main/antiSpamEvidencesGet.operation';
import * as canCancelResiliationGet from './resources/main/canCancelResiliationGet.operation';
import * as cancelResiliationPost from './resources/main/cancelResiliationPost.operation';
import * as changeContactPost from './resources/main/changeContactPost.operation';
import * as diagnosticGet from './resources/main/diagnosticGet.operation';
import * as diagnosticPost from './resources/main/diagnosticPost.operation';
import * as fiberEligibilitiesGet from './resources/main/fiberEligibilitiesGet.operation';
import * as fiberEligibilityDetailGet from './resources/main/fiberEligibilityDetailGet.operation';
import * as incidentGet from './resources/main/incidentGet.operation';
import * as incidentsGet from './resources/main/incidentsGet.operation';
import * as incidentDetailGet from './resources/main/incidentDetailGet.operation';
import * as ipsGet from './resources/main/ipsGet.operation';
import * as ipsPost from './resources/main/ipsPost.operation';
import * as ipDelete from './resources/main/ipDelete.operation';
import * as mailSendingPost from './resources/main/mailSendingPost.operation';
import * as modemGet from './resources/main/modemGet.operation';
import * as modemUpdatePut from './resources/main/modemUpdatePut.operation';

// log operations
import * as logKindGet from './resources/log/logKindGet.operation';
import * as logKindNameGet from './resources/log/logKindNameGet.operation';
import * as logSubscriptionGet from './resources/log/logSubscriptionGet.operation';
import * as logSubscriptionPost from './resources/log/logSubscriptionPost.operation';
import * as logSubscriptionDetailGet from './resources/log/logSubscriptionDetailGet.operation';
import * as logSubscriptionDelete from './resources/log/logSubscriptionDelete.operation';
import * as logUrlPost from './resources/log/logUrlPost.operation';

// lines operations
import * as dslamPortGet from './resources/lines/dslamPortGet.operation';
import * as dslamPortAvailableProfilesGet from './resources/lines/dslamPortAvailableProfilesGet.operation';
import * as dslamPortChangeProfilePost from './resources/lines/dslamPortChangeProfilePost.operation';
import * as dslamPortLogsGet from './resources/lines/dslamPortLogsGet.operation';
import * as dslamPortResetPost from './resources/lines/dslamPortResetPost.operation';
import * as linesStatisticsGet from './resources/lines/linesStatisticsGet.operation';
import * as lineDiagnosticCancelPost from './resources/lines/lineDiagnosticCancelPost.operation';
import * as lineDiagnosticRunPost from './resources/lines/lineDiagnosticRunPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'xdslOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
			{
				name: 'Cancel Line Diagnostic',
				value: 'lineDiagnosticCancelPost',
				action: 'Cancel a current line diagnostic of an xDSL service if possible',
			},
			{
				name: 'Cancel Resiliation',
				value: 'cancelResiliationPost',
				action: 'Cancel a current resiliation of an xDSL service',
			},
			{
				name: 'Change DSLAM Port Profile',
				value: 'dslamPortChangeProfilePost',
				action: 'Change the profile of a specific DSLAM port',
			},
			{
				name: 'Change Xdsl Service Contact',
				value: 'changeContactPost',
				action: 'Launch a contact change procedure for an xDSL service',
			},
			{
				name: 'Check Can Cancel Resiliation',
				value: 'canCancelResiliationGet',
				action: 'Check whether a current resiliation can be cancelled',
			},
			{
				name: 'Create Log Subscription',
				value: 'logSubscriptionPost',
				action: 'Create a new log subscription for an xDSL service',
			},
			{
				name: 'Delete Extra IP Range',
				value: 'ipDelete',
				action: 'Stop the renewal of an extra IPv4 range of an xDSL service',
			},
			{
				name: 'Delete Log Subscription',
				value: 'logSubscriptionDelete',
				action: 'Delete a specific log subscription of an xDSL service',
			},
			{
				name: 'Generate Temporary Logs URL',
				value: 'logUrlPost',
				action: 'Generate a temporary URL to retrieve the logs of an xDSL service',
			},
			{
				name: 'Get Address Move Extra IP Range',
				value: 'extraIpRangeGet',
				action: 'Get the information about the extra IPv4 during an address move',
			},
			{
				name: 'Get Anti-Spam',
				value: 'antiSpamDetailGet',
				action: 'Get the properties of a specific anti-spam of an xDSL service',
			},
			{
				name: 'Get Anti-Spam Evidences',
				value: 'antiSpamEvidencesGet',
				action: 'List the evidences stored on the PCS for a specific IP address',
			},
			{
				name: 'Get DSLAM Line Statistics',
				value: 'linesStatisticsGet',
				action: 'Get the statistics of a specific DSLAM line of an xDSL service',
			},
			{
				name: 'Get DSLAM Port',
				value: 'dslamPortGet',
				action: 'Get the properties of a specific DSLAM port of an xDSL service',
			},
			{
				name: 'Get DSLAM Port Logs',
				value: 'dslamPortLogsGet',
				action: 'Get the logs emitted by the DSLAM for a specific port',
			},
			{
				name: 'Get Fiber Eligibility',
				value: 'fiberEligibilityDetailGet',
				action: 'Get the properties of a specific fiber eligibility of an xDSL service',
			},
			{
				name: 'Get Global Incident',
				value: 'incidentDetailGet',
				action: 'Get the properties of a specific global xDSL incident',
			},
			{
				name: 'Get Log Kind Details',
				value: 'logKindNameGet',
				action: 'Get the properties of a specific log kind of an xDSL service',
			},
			{
				name: 'Get Log Subscription Details',
				value: 'logSubscriptionDetailGet',
				action: 'Get the details of a specific log subscription of an xDSL service',
			},
			{
				name: 'Get Xdsl Modem',
				value: 'modemGet',
				action: 'Get the modem properties associated with an xDSL service',
			},
			{
				name: 'Get Xdsl Service',
				value: 'get',
				action: 'Get the properties of a specific xDSL service',
			},
			{
				name: 'Get Xdsl Service Diagnostic',
				value: 'diagnosticGet',
				action: 'Get the diagnostic properties of an xDSL service',
			},
			{
				name: 'Get Xdsl Service Incident',
				value: 'incidentGet',
				action: 'Get the incident properties of an xDSL service',
			},
			{
				name: 'List Anti-Spams',
				value: 'antiSpamsGet',
				action: 'List the anti-spam IPs configured for an xDSL service',
			},
			{
				name: 'List Available Log Kinds',
				value: 'logKindGet',
				action: 'List the available log kinds for an xDSL service',
			},
			{
				name: 'List DSLAM Port Available Profiles',
				value: 'dslamPortAvailableProfilesGet',
				action: 'List all the available profiles for a specific DSLAM port',
			},
			{
				name: 'List Fiber Eligibilities',
				value: 'fiberEligibilitiesGet',
				action: 'List the fiber eligibilities for an xDSL service',
			},
			{
				name: 'List Global Incidents',
				value: 'incidentsGet',
				action: 'List the global xDSL incidents',
			},
			{
				name: 'List Log Subscriptions',
				value: 'logSubscriptionGet',
				action: 'List the log subscriptions for an xDSL service',
			},
			{
				name: 'List Xdsl Service IPs',
				value: 'ipsGet',
				action: 'List the IPv4 addresses available for an xDSL service',
			},
			{
				name: 'List Xdsl Services',
				value: 'list',
				action: 'List the available xDSL services',
			},
			{
				name: 'Move Extra IP Range',
				value: 'extraIpRangeMovePost',
				action: 'Start the process of moving the extra IPv4 address',
			},
			{
				name: 'Order Extra IP Range',
				value: 'ipsPost',
				action: 'Order an extra IPv4 range for an xDSL service',
			},
			{
				name: 'Reset DSLAM Port',
				value: 'dslamPortResetPost',
				action: 'Reset a specific DSLAM port of an xDSL service',
			},
			{
				name: 'Run Line Diagnostic',
				value: 'lineDiagnosticRunPost',
				action: 'Run and retrieve the advanced diagnostic of a DSLAM line',
			},
			{
				name: 'Run Xdsl Service Diagnostic',
				value: 'diagnosticPost',
				action: 'Run a diagnostic on an xDSL service',
			},
			{
				name: 'Update Mail Sending',
				value: 'mailSendingPost',
				action: 'Enable or disable the email sending capability of an xDSL service',
			},
			{
				name: 'Update Xdsl Modem',
				value: 'modemUpdatePut',
				action: 'Modify the modem properties associated with an xDSL service',
			},
			{
				name: 'Update Xdsl Service',
				value: 'updatePut',
				action: 'Modify the properties of a specific xDSL service',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('xdslOperation', 0) as string;

	switch (operation) {
		case 'lineDiagnosticCancelPost':
			return lineDiagnosticCancelPost.execute.call(this);
		case 'cancelResiliationPost':
			return cancelResiliationPost.execute.call(this);
		case 'dslamPortChangeProfilePost':
			return dslamPortChangeProfilePost.execute.call(this);
		case 'changeContactPost':
			return changeContactPost.execute.call(this);
		case 'canCancelResiliationGet':
			return canCancelResiliationGet.execute.call(this);
		case 'logSubscriptionPost':
			return logSubscriptionPost.execute.call(this);
		case 'ipDelete':
			return ipDelete.execute.call(this);
		case 'logSubscriptionDelete':
			return logSubscriptionDelete.execute.call(this);
		case 'logUrlPost':
			return logUrlPost.execute.call(this);
		case 'extraIpRangeGet':
			return extraIpRangeGet.execute.call(this);
		case 'antiSpamDetailGet':
			return antiSpamDetailGet.execute.call(this);
		case 'antiSpamEvidencesGet':
			return antiSpamEvidencesGet.execute.call(this);
		case 'linesStatisticsGet':
			return linesStatisticsGet.execute.call(this);
		case 'dslamPortGet':
			return dslamPortGet.execute.call(this);
		case 'dslamPortLogsGet':
			return dslamPortLogsGet.execute.call(this);
		case 'fiberEligibilityDetailGet':
			return fiberEligibilityDetailGet.execute.call(this);
		case 'incidentDetailGet':
			return incidentDetailGet.execute.call(this);
		case 'logKindNameGet':
			return logKindNameGet.execute.call(this);
		case 'logSubscriptionDetailGet':
			return logSubscriptionDetailGet.execute.call(this);
		case 'modemGet':
			return modemGet.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'diagnosticGet':
			return diagnosticGet.execute.call(this);
		case 'incidentGet':
			return incidentGet.execute.call(this);
		case 'antiSpamsGet':
			return antiSpamsGet.execute.call(this);
		case 'logKindGet':
			return logKindGet.execute.call(this);
		case 'dslamPortAvailableProfilesGet':
			return dslamPortAvailableProfilesGet.execute.call(this);
		case 'fiberEligibilitiesGet':
			return fiberEligibilitiesGet.execute.call(this);
		case 'incidentsGet':
			return incidentsGet.execute.call(this);
		case 'logSubscriptionGet':
			return logSubscriptionGet.execute.call(this);
		case 'ipsGet':
			return ipsGet.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'extraIpRangeMovePost':
			return extraIpRangeMovePost.execute.call(this);
		case 'ipsPost':
			return ipsPost.execute.call(this);
		case 'dslamPortResetPost':
			return dslamPortResetPost.execute.call(this);
		case 'lineDiagnosticRunPost':
			return lineDiagnosticRunPost.execute.call(this);
		case 'diagnosticPost':
			return diagnosticPost.execute.call(this);
		case 'mailSendingPost':
			return mailSendingPost.execute.call(this);
		case 'modemUpdatePut':
			return modemUpdatePut.execute.call(this);
		case 'updatePut':
			return updatePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
