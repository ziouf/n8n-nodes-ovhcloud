import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Main operations
import * as confirmTerminationPost from './resources/main/confirmTerminationPost.operation';
import * as get from './resources/main/get.operation';
import * as list from './resources/main/list.operation';
import * as serviceInfosGet from './resources/main/serviceInfosGet.operation';
import * as terminatePost from './resources/main/terminatePost.operation';

// Access Point operations
import * as accessPointCustomerNetworkDelete from './resources/accessPoint/accessPointCustomerNetworkDelete.operation';
import * as accessPointCustomerNetworkDetailGet from './resources/accessPoint/accessPointCustomerNetworkDetailGet.operation';
import * as accessPointCustomerNetworkGet from './resources/accessPoint/accessPointCustomerNetworkGet.operation';
import * as accessPointCustomerNetworkPost from './resources/accessPoint/accessPointCustomerNetworkPost.operation';
import * as accessPointDelete from './resources/accessPoint/accessPointDelete.operation';
import * as accessPointDetailGet from './resources/accessPoint/accessPointDetailGet.operation';
import * as accessPointGet from './resources/accessPoint/accessPointGet.operation';
import * as accessPointPost from './resources/accessPoint/accessPointPost.operation';
import * as changeSessionTimeoutPost from './resources/accessPoint/changeSessionTimeoutPost.operation';
import * as disableTwoFAPost from './resources/accessPoint/disableTwoFAPost.operation';
import * as disableWindowsUsernameOptionPost from './resources/accessPoint/disableWindowsUsernameOptionPost.operation';
import * as enableTwoFAPost from './resources/accessPoint/enableTwoFAPost.operation';
import * as enableWindowsUsernameOptionPost from './resources/accessPoint/enableWindowsUsernameOptionPost.operation';

// Customer Network operations
import * as customerNetworkDelete from './resources/customerNetwork/customerNetworkDelete.operation';
import * as customerNetworkDetailGet from './resources/customerNetwork/customerNetworkDetailGet.operation';
import * as customerNetworkGet from './resources/customerNetwork/customerNetworkGet.operation';
import * as customerNetworkPost from './resources/customerNetwork/customerNetworkPost.operation';

// Dedicated Horizon operations
import * as changePasswordPost from './resources/dedicatedHorizon/changePasswordPost.operation';
import * as changePropertiesPost from './resources/dedicatedHorizon/changePropertiesPost.operation';
import * as customerUserChangePasswordPost from './resources/dedicatedHorizon/customerUserChangePasswordPost.operation';
import * as customerUserDelete from './resources/dedicatedHorizon/customerUserDelete.operation';
import * as customerUserDetailGet from './resources/dedicatedHorizon/customerUserDetailGet.operation';
import * as customerUserGet from './resources/dedicatedHorizon/customerUserGet.operation';
import * as customerUserPost from './resources/dedicatedHorizon/customerUserPost.operation';
import * as dedicatedHorizonGet from './resources/dedicatedHorizon/dedicatedHorizonGet.operation';
import * as disableStorageAcceleratorPost from './resources/dedicatedHorizon/disableStorageAcceleratorPost.operation';
import * as enableStorageAcceleratorPost from './resources/dedicatedHorizon/enableStorageAcceleratorPost.operation';
import * as taskDetailGet from './resources/dedicatedHorizon/taskDetailGet.operation';
import * as taskGet from './resources/dedicatedHorizon/taskGet.operation';
import * as userGet from './resources/dedicatedHorizon/userGet.operation';

// Domain Trust operations
import * as addChildDomainPost from './resources/domainTrust/addChildDomainPost.operation';
import * as addDomainControllerPost from './resources/domainTrust/addDomainControllerPost.operation';
import * as addDomainUserOnComposerPost from './resources/domainTrust/addDomainUserOnComposerPost.operation';
import * as createTrustPost from './resources/domainTrust/createTrustPost.operation';
import * as domainTrustDetailGet from './resources/domainTrust/domainTrustDetailGet.operation';
import * as domainTrustGet from './resources/domainTrust/domainTrustGet.operation';
import * as domainTrustPost from './resources/domainTrust/domainTrustPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'horizonViewOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Add Access Point',
				value: 'accessPointPost',
				action: 'Add an access point to a Horizon View service',
			},
			{
				name: 'Add Child Domain',
				value: 'addChildDomainPost',
				action: 'Add a child domain to a domain trust',
			},
			{
				name: 'Add Customer Network',
				value: 'customerNetworkPost',
				action: 'Add a customer network to a Horizon View service',
			},
			{
				name: 'Add Customer Network to Access Point',
				value: 'accessPointCustomerNetworkPost',
				action: 'Add a customer network to an access point',
			},
			{
				name: 'Add Customer User',
				value: 'customerUserPost',
				action: 'Add a customer user to the dedicated Horizon component',
			},
			{
				name: 'Add Domain Controller',
				value: 'addDomainControllerPost',
				action: 'Add a domain controller to a domain trust',
			},
			{
				name: 'Add Domain Trust',
				value: 'domainTrustPost',
				action: 'Add a domain trust to a Horizon View service',
			},
			{
				name: 'Add Domain User on Composer',
				value: 'addDomainUserOnComposerPost',
				action: 'Add a domain user on the composer for a domain trust',
			},
			{
				name: 'Change Access Point Session Timeout',
				value: 'changeSessionTimeoutPost',
				action: 'Change the session timeout of an access point',
			},
			{
				name: 'Change Customer User Password',
				value: 'customerUserChangePasswordPost',
				action: 'Change the password of a customer user',
			},
			{
				name: 'Change Dedicated Horizon User Properties',
				value: 'changePropertiesPost',
				action: 'Change the properties of the dedicated Horizon user',
			},
			{
				name: 'Change User Password',
				value: 'changePasswordPost',
				action: 'Change the password of the dedicated Horizon user',
			},
			{
				name: 'Confirm Horizon View Service Termination',
				value: 'confirmTerminationPost',
				action: 'Confirm the termination of a Horizon View service',
			},
			{
				name: 'Create Trust',
				value: 'createTrustPost',
				action: 'Create a trust for a domain trust',
			},
			{
				name: 'Delete Access Point',
				value: 'accessPointDelete',
				action: 'Delete an access point',
			},
			{
				name: 'Delete Customer Network',
				value: 'customerNetworkDelete',
				action: 'Delete a customer network of a Horizon View service',
			},
			{
				name: 'Delete Customer Network From Access Point',
				value: 'accessPointCustomerNetworkDelete',
				action: 'Delete a customer network from an access point',
			},
			{
				name: 'Delete Customer User',
				value: 'customerUserDelete',
				action: 'Delete a customer user of the dedicated Horizon component',
			},
			{
				name: 'Disable Storage Accelerator',
				value: 'disableStorageAcceleratorPost',
				action: 'Disable the storage accelerator on the dedicated Horizon component',
			},
			{
				name: 'Disable Two-Factor Authentication',
				value: 'disableTwoFAPost',
				action: 'Disable two-factor authentication on an access point',
			},
			{
				name: 'Disable Windows Username Option',
				value: 'disableWindowsUsernameOptionPost',
				action: 'Disable the Windows username option on an access point',
			},
			{
				name: 'Enable Storage Accelerator',
				value: 'enableStorageAcceleratorPost',
				action: 'Enable the storage accelerator on the dedicated Horizon component',
			},
			{
				name: 'Enable Two-Factor Authentication',
				value: 'enableTwoFAPost',
				action: 'Enable two-factor authentication on an access point',
			},
			{
				name: 'Enable Windows Username Option',
				value: 'enableWindowsUsernameOptionPost',
				action: 'Enable the Windows username option on an access point',
			},
			{
				name: 'Get Access Point Properties',
				value: 'accessPointDetailGet',
				action: 'Get the properties of an access point',
			},
			{
				name: 'Get Customer Network Properties',
				value: 'customerNetworkDetailGet',
				action: 'Get the properties of a customer network',
			},
			{
				name: 'Get Customer Network Properties From Access Point',
				value: 'accessPointCustomerNetworkDetailGet',
				action: 'Get the properties of a customer network of an access point',
			},
			{
				name: 'Get Customer User Properties',
				value: 'customerUserDetailGet',
				action: 'Get the properties of a customer user',
			},
			{
				name: 'Get Dedicated Horizon Properties',
				value: 'dedicatedHorizonGet',
				action: 'Get the properties of the dedicated Horizon component',
			},
			{
				name: 'Get Dedicated Horizon Task Properties',
				value: 'taskDetailGet',
				action: 'Get the properties of a task of the dedicated Horizon component',
			},
			{
				name: 'Get Dedicated Horizon User',
				value: 'userGet',
				action: 'Get the customer user of the dedicated Horizon component',
			},
			{
				name: 'Get Domain Trust Properties',
				value: 'domainTrustDetailGet',
				action: 'Get the properties of a domain trust',
			},
			{
				name: 'Get Horizon View Service Properties',
				value: 'get',
				action: 'Get the properties of a Horizon View service',
			},
			{
				name: 'Get Service Information',
				value: 'serviceInfosGet',
				action: 'Get the service information of a Horizon View service',
			},
			{
				name: 'List Access Points',
				value: 'accessPointGet',
				action: 'List access points of a Horizon View service',
			},
			{
				name: 'List Customer Networks',
				value: 'customerNetworkGet',
				action: 'List customer networks of a Horizon View service',
			},
			{
				name: 'List Customer Networks of Access Point',
				value: 'accessPointCustomerNetworkGet',
				action: 'List customer networks of an access point',
			},
			{
				name: 'List Customer Users',
				value: 'customerUserGet',
				action: 'List customer users of the dedicated Horizon component',
			},
			{
				name: 'List Dedicated Horizon Tasks',
				value: 'taskGet',
				action: 'List tasks of the dedicated Horizon component',
			},
			{
				name: 'List Domain Trusts',
				value: 'domainTrustGet',
				action: 'List domain trusts of a Horizon View service',
			},
			{
				name: 'List Horizon View Services',
				value: 'list',
				action: 'List all available Horizon View services',
			},
			{
				name: 'Terminate Horizon View Service',
				value: 'terminatePost',
				action: 'Ask for the termination of a Horizon View service',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('horizonViewOperation', 0) as string;

	switch (operation) {
		case 'accessPointCustomerNetworkDelete':
			return accessPointCustomerNetworkDelete.execute.call(this);
		case 'accessPointCustomerNetworkDetailGet':
			return accessPointCustomerNetworkDetailGet.execute.call(this);
		case 'accessPointCustomerNetworkGet':
			return accessPointCustomerNetworkGet.execute.call(this);
		case 'accessPointCustomerNetworkPost':
			return accessPointCustomerNetworkPost.execute.call(this);
		case 'accessPointDelete':
			return accessPointDelete.execute.call(this);
		case 'accessPointDetailGet':
			return accessPointDetailGet.execute.call(this);
		case 'accessPointGet':
			return accessPointGet.execute.call(this);
		case 'accessPointPost':
			return accessPointPost.execute.call(this);
		case 'addChildDomainPost':
			return addChildDomainPost.execute.call(this);
		case 'addDomainControllerPost':
			return addDomainControllerPost.execute.call(this);
		case 'addDomainUserOnComposerPost':
			return addDomainUserOnComposerPost.execute.call(this);
		case 'changePasswordPost':
			return changePasswordPost.execute.call(this);
		case 'changePropertiesPost':
			return changePropertiesPost.execute.call(this);
		case 'changeSessionTimeoutPost':
			return changeSessionTimeoutPost.execute.call(this);
		case 'confirmTerminationPost':
			return confirmTerminationPost.execute.call(this);
		case 'createTrustPost':
			return createTrustPost.execute.call(this);
		case 'customerNetworkDelete':
			return customerNetworkDelete.execute.call(this);
		case 'customerNetworkDetailGet':
			return customerNetworkDetailGet.execute.call(this);
		case 'customerNetworkGet':
			return customerNetworkGet.execute.call(this);
		case 'customerNetworkPost':
			return customerNetworkPost.execute.call(this);
		case 'customerUserChangePasswordPost':
			return customerUserChangePasswordPost.execute.call(this);
		case 'customerUserDelete':
			return customerUserDelete.execute.call(this);
		case 'customerUserDetailGet':
			return customerUserDetailGet.execute.call(this);
		case 'customerUserGet':
			return customerUserGet.execute.call(this);
		case 'customerUserPost':
			return customerUserPost.execute.call(this);
		case 'dedicatedHorizonGet':
			return dedicatedHorizonGet.execute.call(this);
		case 'disableStorageAcceleratorPost':
			return disableStorageAcceleratorPost.execute.call(this);
		case 'disableTwoFAPost':
			return disableTwoFAPost.execute.call(this);
		case 'disableWindowsUsernameOptionPost':
			return disableWindowsUsernameOptionPost.execute.call(this);
		case 'domainTrustDetailGet':
			return domainTrustDetailGet.execute.call(this);
		case 'domainTrustGet':
			return domainTrustGet.execute.call(this);
		case 'domainTrustPost':
			return domainTrustPost.execute.call(this);
		case 'enableStorageAcceleratorPost':
			return enableStorageAcceleratorPost.execute.call(this);
		case 'enableTwoFAPost':
			return enableTwoFAPost.execute.call(this);
		case 'enableWindowsUsernameOptionPost':
			return enableWindowsUsernameOptionPost.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this);
		case 'taskDetailGet':
			return taskDetailGet.execute.call(this);
		case 'taskGet':
			return taskGet.execute.call(this);
		case 'terminatePost':
			return terminatePost.execute.call(this);
		case 'userGet':
			return userGet.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
