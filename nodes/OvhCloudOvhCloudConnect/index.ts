import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// main operations
import * as list from './resources/main/list.operation';
import * as get from './resources/main/get.operation';
import * as updatePut from './resources/main/updatePut.operation';
import * as confirmTerminationPost from './resources/main/confirmTerminationPost.operation';
import * as changeContactPost from './resources/main/changeContactPost.operation';
import * as diagnosticGet from './resources/main/diagnosticGet.operation';
import * as diagnosticPost from './resources/main/diagnosticPost.operation';
import * as diagnosticDetailGet from './resources/main/diagnosticDetailGet.operation';
import * as incidentGet from './resources/main/incidentGet.operation';
import * as incidentDetailGet from './resources/main/incidentDetailGet.operation';
import * as interfaceGet from './resources/main/interfaceGet.operation';
import * as interfaceDetailGet from './resources/main/interfaceDetailGet.operation';
import * as interfaceLockPost from './resources/main/interfaceLockPost.operation';
import * as interfaceUnlockPost from './resources/main/interfaceUnlockPost.operation';
import * as interfaceStatisticsGet from './resources/main/interfaceStatisticsGet.operation';
import * as interfaceStatusGet from './resources/main/interfaceStatusGet.operation';
import * as monitoringGet from './resources/main/monitoringGet.operation';
import * as monitoringPost from './resources/main/monitoringPost.operation';
import * as monitoringDelete from './resources/main/monitoringDelete.operation';
import * as migrationGet from './resources/main/migrationGet.operation';
import * as migrationPost from './resources/main/migrationPost.operation';

// config operations
import * as popGet from './resources/config/popGet.operation';
import * as popPost from './resources/config/popPost.operation';
import * as popDetailGet from './resources/config/popDetailGet.operation';
import * as popDelete from './resources/config/popDelete.operation';
import * as popDatacenterGet from './resources/config/popDatacenterGet.operation';
import * as popDatacenterPost from './resources/config/popDatacenterPost.operation';
import * as popDatacenterDetailGet from './resources/config/popDatacenterDetailGet.operation';
import * as popDatacenterDelete from './resources/config/popDatacenterDelete.operation';
import * as popDatacenterExtraGet from './resources/config/popDatacenterExtraGet.operation';
import * as popDatacenterExtraPost from './resources/config/popDatacenterExtraPost.operation';
import * as popDatacenterExtraDetailGet from './resources/config/popDatacenterExtraDetailGet.operation';
import * as popDatacenterExtraDelete from './resources/config/popDatacenterExtraDelete.operation';
import * as popStatisticsGet from './resources/config/popStatisticsGet.operation';
import * as popStatusGet from './resources/config/popStatusGet.operation';

// log operations
import * as logKindGet from './resources/log/logKindGet.operation';
import * as logKindNameGet from './resources/log/logKindNameGet.operation';
import * as logSubscriptionGet from './resources/log/logSubscriptionGet.operation';
import * as logSubscriptionPost from './resources/log/logSubscriptionPost.operation';
import * as logSubscriptionDetailGet from './resources/log/logSubscriptionDetailGet.operation';
import * as logSubscriptionDelete from './resources/log/logSubscriptionDelete.operation';
import * as logUrlPost from './resources/log/logUrlPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'ovhCloudConnectOperation',
		type: 'options',
		noDataExpression: true,
		default: 'interfaceStatisticsGet',
		options: [
			{
				name: 'Change Service Contact',
				value: 'changeContactPost',
				action: 'Launch a contact change procedure for an OvhCloud Connect service',
			},
			{
				name: 'Confirm Service Termination',
				value: 'confirmTerminationPost',
				action: 'Confirm the termination of an OvhCloud Connect service',
			},
			{
				name: 'Create Log Subscription',
				value: 'logSubscriptionPost',
				action: 'Create a log subscription for an OvhCloud Connect service',
			},
			{
				name: 'Create Monitoring Subscription',
				value: 'monitoringPost',
				action: 'Create a new monitoring subscription for an OvhCloud Connect service',
			},
			{
				name: 'Create POP Configuration',
				value: 'popPost',
				action: 'Create a new POP configuration for an OvhCloud Connect service',
			},
			{
				name: 'Create POP Datacenter Configuration',
				value: 'popDatacenterPost',
				action: 'Create a new datacenter configuration for a POP configuration',
			},
			{
				name: 'Create POP Datacenter Extra Configuration',
				value: 'popDatacenterExtraPost',
				action: 'Create a new extra configuration for a datacenter configuration',
			},
			{
				name: 'Create Service Diagnostic',
				value: 'diagnosticPost',
				action: 'Create a new diagnostic configuration for an OvhCloud Connect service',
			},
			{
				name: 'Create Service Migration',
				value: 'migrationPost',
				action: 'Create a new migration service for an OvhCloud Connect service',
			},
			{
				name: 'Delete Log Subscription',
				value: 'logSubscriptionDelete',
				action: 'Delete a specific log subscription of an OvhCloud Connect service',
			},
			{
				name: 'Delete Monitoring Subscription',
				value: 'monitoringDelete',
				action: 'Delete a monitoring subscription of an OvhCloud Connect service',
			},
			{
				name: 'Delete POP Configuration',
				value: 'popDelete',
				action: 'Delete a specific POP configuration of an OvhCloud Connect service',
			},
			{
				name: 'Delete POP Datacenter Configuration',
				value: 'popDatacenterDelete',
				action: 'Delete a specific datacenter configuration of a POP configuration',
			},
			{
				name: 'Delete POP Datacenter Extra Configuration',
				value: 'popDatacenterExtraDelete',
				action: 'Delete a specific extra configuration of a datacenter configuration',
			},
			{
				name: 'Generate Temporary Logs URL',
				value: 'logUrlPost',
				action: 'Generate a temporary URL to retrieve the logs of an OvhCloud Connect service',
			},
			{
				name: 'Get Interface Statistics',
				value: 'interfaceStatisticsGet',
				action: 'Get the statistics for a specific interface of an OvhCloud Connect service',
			},
			{
				name: 'Get Interface Status',
				value: 'interfaceStatusGet',
				action: 'Get the current status of an interface of an OvhCloud Connect service',
			},
			{
				name: 'Get Log Kind Details',
				value: 'logKindNameGet',
				action: 'Get the details of a specific log kind of an OvhCloud Connect service',
			},
			{
				name: 'Get Log Subscription Details',
				value: 'logSubscriptionDetailGet',
				action: 'Get the details of a specific log subscription of an OvhCloud Connect service',
			},
			{
				name: 'Get OvhCloud Connect Service',
				value: 'get',
				action: 'Get the details of an OvhCloud Connect service',
			},
			{
				name: 'Get POP Configuration',
				value: 'popDetailGet',
				action: 'Get a specific POP configuration of an OvhCloud Connect service',
			},
			{
				name: 'Get POP Datacenter Configuration',
				value: 'popDatacenterDetailGet',
				action: 'Get a specific datacenter configuration of a POP configuration',
			},
			{
				name: 'Get POP Datacenter Extra Configuration',
				value: 'popDatacenterExtraDetailGet',
				action: 'Get a specific extra configuration of a datacenter configuration',
			},
			{
				name: 'Get POP Statistics',
				value: 'popStatisticsGet',
				action: 'Get the statistics for a POP configuration of an OvhCloud Connect service',
			},
			{
				name: 'Get POP Status',
				value: 'popStatusGet',
				action: 'Get the current status of a POP configuration of an OvhCloud Connect service',
			},
			{
				name: 'Get Service Diagnostic',
				value: 'diagnosticDetailGet',
				action: 'Get the details of a specific diagnostic of an OvhCloud Connect service',
			},
			{
				name: 'Get Service Incident',
				value: 'incidentDetailGet',
				action: 'Get the details of a specific incident of an OvhCloud Connect service',
			},
			{
				name: 'Get Service Interface',
				value: 'interfaceDetailGet',
				action: 'Get the details of a specific interface of an OvhCloud Connect service',
			},
			{
				name: 'Get Service Migration',
				value: 'migrationGet',
				action: 'Get the migration service information of an OvhCloud Connect service',
			},
			{
				name: 'List Available Log Kinds',
				value: 'logKindGet',
				action: 'List the available log kinds for an OvhCloud Connect service',
			},
			{
				name: 'List Log Subscriptions',
				value: 'logSubscriptionGet',
				action: 'List the log subscriptions for an OvhCloud Connect service',
			},
			{
				name: 'List OvhCloud Connect Services',
				value: 'list',
				action: 'List the available OvhCloud Connect services',
			},
			{
				name: 'List POP Configurations',
				value: 'popGet',
				action: 'List the POP configurations linked to an OvhCloud Connect service',
			},
			{
				name: 'List POP Datacenter Configurations',
				value: 'popDatacenterGet',
				action: 'List the datacenter configurations linked to a POP configuration',
			},
			{
				name: 'List POP Datacenter Extra Configurations',
				value: 'popDatacenterExtraGet',
				action: 'List the extra configurations for a datacenter configuration',
			},
			{
				name: 'List Service Diagnostics',
				value: 'diagnosticGet',
				action: 'List the diagnostics linked to an OvhCloud Connect service',
			},
			{
				name: 'List Service Incidents',
				value: 'incidentGet',
				action: 'List the incidents linked to an OvhCloud Connect service',
			},
			{
				name: 'List Service Interfaces',
				value: 'interfaceGet',
				action: 'List the interfaces linked to an OvhCloud Connect service',
			},
			{
				name: 'List Service Monitoring Alerts',
				value: 'monitoringGet',
				action: 'List the monitoring alerts for an OvhCloud Connect service',
			},
			{
				name: 'Lock Service Interface',
				value: 'interfaceLockPost',
				action: 'Lock a specific interface of an OvhCloud Connect service',
			},
			{
				name: 'Unlock Service Interface',
				value: 'interfaceUnlockPost',
				action: 'Unlock a specific interface of an OvhCloud Connect service',
			},
			{
				name: 'Update OvhCloud Connect Service',
				value: 'updatePut',
				action: 'Modify an OvhCloud Connect service',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ovhCloudConnectOperation', 0) as string;

	switch (operation) {
		case 'changeContactPost':
			return changeContactPost.execute.call(this, itemIndex ?? 0);
		case 'confirmTerminationPost':
			return confirmTerminationPost.execute.call(this, itemIndex ?? 0);
		case 'logSubscriptionPost':
			return logSubscriptionPost.execute.call(this, itemIndex ?? 0);
		case 'monitoringPost':
			return monitoringPost.execute.call(this, itemIndex ?? 0);
		case 'popPost':
			return popPost.execute.call(this, itemIndex ?? 0);
		case 'popDatacenterPost':
			return popDatacenterPost.execute.call(this, itemIndex ?? 0);
		case 'popDatacenterExtraPost':
			return popDatacenterExtraPost.execute.call(this, itemIndex ?? 0);
		case 'diagnosticPost':
			return diagnosticPost.execute.call(this, itemIndex ?? 0);
		case 'migrationPost':
			return migrationPost.execute.call(this, itemIndex ?? 0);
		case 'logSubscriptionDelete':
			return logSubscriptionDelete.execute.call(this, itemIndex ?? 0);
		case 'monitoringDelete':
			return monitoringDelete.execute.call(this, itemIndex ?? 0);
		case 'popDelete':
			return popDelete.execute.call(this, itemIndex ?? 0);
		case 'popDatacenterDelete':
			return popDatacenterDelete.execute.call(this, itemIndex ?? 0);
		case 'popDatacenterExtraDelete':
			return popDatacenterExtraDelete.execute.call(this, itemIndex ?? 0);
		case 'logUrlPost':
			return logUrlPost.execute.call(this, itemIndex ?? 0);
		case 'interfaceStatisticsGet':
			return interfaceStatisticsGet.execute.call(this, itemIndex ?? 0);
		case 'interfaceStatusGet':
			return interfaceStatusGet.execute.call(this, itemIndex ?? 0);
		case 'logKindNameGet':
			return logKindNameGet.execute.call(this, itemIndex ?? 0);
		case 'logSubscriptionDetailGet':
			return logSubscriptionDetailGet.execute.call(this, itemIndex ?? 0);
		case 'get':
			return get.execute.call(this, itemIndex ?? 0);
		case 'popDetailGet':
			return popDetailGet.execute.call(this, itemIndex ?? 0);
		case 'popDatacenterDetailGet':
			return popDatacenterDetailGet.execute.call(this, itemIndex ?? 0);
		case 'popDatacenterExtraDetailGet':
			return popDatacenterExtraDetailGet.execute.call(this, itemIndex ?? 0);
		case 'popStatisticsGet':
			return popStatisticsGet.execute.call(this, itemIndex ?? 0);
		case 'popStatusGet':
			return popStatusGet.execute.call(this, itemIndex ?? 0);
		case 'diagnosticDetailGet':
			return diagnosticDetailGet.execute.call(this, itemIndex ?? 0);
		case 'incidentDetailGet':
			return incidentDetailGet.execute.call(this, itemIndex ?? 0);
		case 'interfaceDetailGet':
			return interfaceDetailGet.execute.call(this, itemIndex ?? 0);
		case 'migrationGet':
			return migrationGet.execute.call(this, itemIndex ?? 0);
		case 'logKindGet':
			return logKindGet.execute.call(this, itemIndex ?? 0);
		case 'logSubscriptionGet':
			return logSubscriptionGet.execute.call(this, itemIndex ?? 0);
		case 'list':
			return list.execute.call(this, itemIndex ?? 0);
		case 'popGet':
			return popGet.execute.call(this, itemIndex ?? 0);
		case 'popDatacenterGet':
			return popDatacenterGet.execute.call(this, itemIndex ?? 0);
		case 'popDatacenterExtraGet':
			return popDatacenterExtraGet.execute.call(this, itemIndex ?? 0);
		case 'diagnosticGet':
			return diagnosticGet.execute.call(this, itemIndex ?? 0);
		case 'incidentGet':
			return incidentGet.execute.call(this, itemIndex ?? 0);
		case 'interfaceGet':
			return interfaceGet.execute.call(this, itemIndex ?? 0);
		case 'monitoringGet':
			return monitoringGet.execute.call(this, itemIndex ?? 0);
		case 'interfaceLockPost':
			return interfaceLockPost.execute.call(this, itemIndex ?? 0);
		case 'interfaceUnlockPost':
			return interfaceUnlockPost.execute.call(this, itemIndex ?? 0);
		case 'updatePut':
			return updatePut.execute.call(this, itemIndex ?? 0);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
