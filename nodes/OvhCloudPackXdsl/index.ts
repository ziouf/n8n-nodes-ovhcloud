import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import * as list from './resources/main/list.operation';
import * as get from './resources/main/get.operation';
import * as updatePut from './resources/main/updatePut.operation';
import * as canCancelResiliationGet from './resources/main/canCancelResiliationGet.operation';
import * as cancelResiliationPost from './resources/main/cancelResiliationPost.operation';
import * as changeContactPost from './resources/main/changeContactPost.operation';
import * as contactOwnerGet from './resources/main/contactOwnerGet.operation';
import * as moveOfferPost from './resources/addressMove/moveOfferPost.operation';
import * as offersPost from './resources/addressMove/offersPost.operation';
import * as servicesToDeleteUnpackTermsPost from './resources/addressMove/servicesToDeleteUnpackTermsPost.operation';
import * as optionsTldsGet from './resources/domain/optionsTldsGet.operation';
import * as domainServicesGet from './resources/domain/servicesGet.operation';
import * as domainServicesPost from './resources/domain/servicesPost.operation';
import * as optionsDomainsGet from './resources/emailPro/optionsDomainsGet.operation';
import * as emailProOptionsIsEmailAvailableGet from './resources/emailPro/optionsIsEmailAvailableGet.operation';
import * as emailProServicesGet from './resources/emailPro/servicesGet.operation';
import * as emailProServicesPost from './resources/emailPro/servicesPost.operation';
import * as exchangeAccountServicesGet from './resources/exchange/exchangeAccountServicesGet.operation';
import * as exchangeAccountServicesDomainGet from './resources/exchange/exchangeAccountServicesDomainGet.operation';
import * as exchangeIndividualOptionsDomainsGet from './resources/exchange/exchangeIndividualOptionsDomainsGet.operation';
import * as exchangeIndividualOptionsIsEmailAvailableGet from './resources/exchange/exchangeIndividualOptionsIsEmailAvailableGet.operation';
import * as exchangeOrganizationServicesGet from './resources/exchange/exchangeOrganizationServicesGet.operation';
import * as hostedEmailOptionsDomainsGet from './resources/hostedEmail/optionsDomainsGet.operation';
import * as hostedEmailServicesGet from './resources/hostedEmail/servicesGet.operation';
import * as hostedEmailServicesPost from './resources/hostedEmail/servicesPost.operation';
import * as hostedEmailServicesDomainGet from './resources/hostedEmail/servicesDomainGet.operation';
import * as hostedEmailServicesDomainDelete from './resources/hostedEmail/servicesDomainDelete.operation';
import * as hostedEmailServicesDomainAccountGet from './resources/hostedEmail/servicesDomainAccountGet.operation';
import * as hostedEmailServicesDomainChangePasswordPost from './resources/hostedEmail/servicesDomainChangePasswordPost.operation';
import * as hostedEmailServicesDomainConfigurationGet from './resources/hostedEmail/servicesDomainConfigurationGet.operation';
import * as migratePost from './resources/migration/migratePost.operation';
import * as migrationOffersPost from './resources/migration/offersPost.operation';
import * as migrationServicesToDeleteUnpackTermsPost from './resources/migration/servicesToDeleteUnpackTermsPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'packXdslOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Activate Domain Service',
				value: 'domainServicesPost',
				action: 'Activate a domain service in the pack',
			},
			{
				name: 'Activate Email Pro Service',
				value: 'emailProServicesPost',
				action: 'Activate an Email Pro service',
			},
			{
				name: 'Activate Hosted Email Service',
				value: 'hostedEmailServicesPost',
				action: 'Activate a hosted email service',
			},
			{
				name: 'Cancel Resiliation',
				value: 'cancelResiliationPost',
				action: 'Cancel the ongoing resiliation',
			},
			{
				name: 'Change Contacts',
				value: 'changeContactPost',
				action: 'Launch a contact change procedure',
			},
			{
				name: 'Change Hosted Email Password',
				value: 'hostedEmailServicesDomainChangePasswordPost',
				action: 'Change hosted email account password',
			},
			{
				name: 'Check Email Pro Email Availability',
				value: 'emailProOptionsIsEmailAvailableGet',
				action: 'Check if an email address is available for Email Pro activation',
			},
			{
				name: 'Check Exchange Individual Email Availability',
				value: 'exchangeIndividualOptionsIsEmailAvailableGet',
				action: 'Check if an email address is available for Exchange Individual service creation',
			},
			{
				name: 'Check If Resiliation Can Be Cancelled',
				value: 'canCancelResiliationGet',
				action: 'Check if the resiliation can be cancelled',
			},
			{
				name: 'Delete Hosted Email Service',
				value: 'hostedEmailServicesDomainDelete',
				action: 'Delete a hosted email account',
			},
			{
				name: 'Get Address Move Offers',
				value: 'addressMoveOffersPost',
				action: 'Get the possibilities of address move offers',
			},
			{
				name: 'Get Address Move Services To Delete',
				value: 'addressMoveServicesToDeleteUnpackTermsPost',
				action: 'Calculate services to delete with unpack terms for address move',
			},
			{
				name: 'Get Available Domain TLDs',
				value: 'domainOptionsTldsGet',
				action: 'Get the available TLDs for domain order',
			},
			{
				name: 'Get Available Email Pro Domains',
				value: 'emailProOptionsDomainsGet',
				action: 'List the available domains for the Email Pro service',
			},
			{
				name: 'Get Available Exchange Individual Domains',
				value: 'exchangeIndividualOptionsDomainsGet',
				action: 'Get the available domains for the Exchange Individual service',
			},
			{
				name: 'Get Available Hosted Email Domains',
				value: 'hostedEmailOptionsDomainsGet',
				action: 'Get the available domains for the Hosted Email service',
			},
			{
				name: 'Get Contact Owner',
				value: 'contactOwnerGet',
				action: 'Get contact information about the owner',
			},
			{
				name: 'Get Exchange Account Service',
				value: 'exchangeAccountServicesDomainGet',
				action: 'Get the properties of an Exchange 2013 service',
			},
			{
				name: 'Get Hosted Email Account',
				value: 'hostedEmailServicesDomainAccountGet',
				action: 'Get hosted email account information',
			},
			{
				name: 'Get Hosted Email Configuration',
				value: 'hostedEmailServicesDomainConfigurationGet',
				action: 'Get hosted email configuration information',
			},
			{
				name: 'Get Hosted Email Service',
				value: 'hostedEmailServicesDomainGet',
				action: 'Get the properties of a hosted email service',
			},
			{
				name: 'Get Migration Offers',
				value: 'migrationOffersPost',
				action: 'Get the possibilities of migration offers',
			},
			{
				name: 'Get Migration Services To Delete',
				value: 'migrationServicesToDeleteUnpackTermsPost',
				action: 'Calculate services to delete with migration terms',
			},
			{
				name: 'Get Pack Xdsl',
				value: 'get',
				action: 'Get the properties of a pack',
			},
			{
				name: 'List Domain Services',
				value: 'domainServicesGet',
				action: 'List the domain services of the pack',
			},
			{
				name: 'List Email Pro Services',
				value: 'emailProServicesGet',
				action: 'List the Email Pro services',
			},
			{
				name: 'List Exchange Account Services',
				value: 'exchangeAccountServicesGet',
				action: 'List the Exchange 2013 services',
			},
			{
				name: 'List Exchange Organization Services',
				value: 'exchangeOrganizationServicesGet',
				action: 'List the Exchange 2013 organization services',
			},
			{
				name: 'List Hosted Email Services',
				value: 'hostedEmailServicesGet',
				action: 'List the hosted email services',
			},
			{
				name: 'List Pack Xdsl Services',
				value: 'list',
				action: 'List available Pack Xdsl services',
			},
			{
				name: 'Migrate To Offer',
				value: 'migrationMigratePost',
				action: 'Migrate to the selected offer',
			},
			{
				name: 'Move Access To Another Address',
				value: 'addressMoveMoveOfferPost',
				action: 'Move the access to another address',
			},
			{
				name: 'Update Pack Xdsl',
				value: 'updatePut',
				action: 'Update the properties of a pack',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('packXdslOperation', 0) as string;

	switch (operation) {
		case 'domainServicesPost':
			return domainServicesPost.execute.call(this);
		case 'emailProServicesPost':
			return emailProServicesPost.execute.call(this);
		case 'hostedEmailServicesPost':
			return hostedEmailServicesPost.execute.call(this);
		case 'cancelResiliationPost':
			return cancelResiliationPost.execute.call(this);
		case 'changeContactPost':
			return changeContactPost.execute.call(this);
		case 'hostedEmailServicesDomainChangePasswordPost':
			return hostedEmailServicesDomainChangePasswordPost.execute.call(this);
		case 'emailProOptionsIsEmailAvailableGet':
			return emailProOptionsIsEmailAvailableGet.execute.call(this);
		case 'exchangeIndividualOptionsIsEmailAvailableGet':
			return exchangeIndividualOptionsIsEmailAvailableGet.execute.call(this);
		case 'canCancelResiliationGet':
			return canCancelResiliationGet.execute.call(this);
		case 'hostedEmailServicesDomainDelete':
			return hostedEmailServicesDomainDelete.execute.call(this);
		case 'addressMoveOffersPost':
			return offersPost.execute.call(this);
		case 'addressMoveServicesToDeleteUnpackTermsPost':
			return servicesToDeleteUnpackTermsPost.execute.call(this);
		case 'domainOptionsTldsGet':
			return optionsTldsGet.execute.call(this);
		case 'emailProOptionsDomainsGet':
			return optionsDomainsGet.execute.call(this);
		case 'exchangeIndividualOptionsDomainsGet':
			return exchangeIndividualOptionsDomainsGet.execute.call(this);
		case 'hostedEmailOptionsDomainsGet':
			return hostedEmailOptionsDomainsGet.execute.call(this);
		case 'contactOwnerGet':
			return contactOwnerGet.execute.call(this);
		case 'exchangeAccountServicesDomainGet':
			return exchangeAccountServicesDomainGet.execute.call(this);
		case 'hostedEmailServicesDomainAccountGet':
			return hostedEmailServicesDomainAccountGet.execute.call(this);
		case 'hostedEmailServicesDomainConfigurationGet':
			return hostedEmailServicesDomainConfigurationGet.execute.call(this);
		case 'hostedEmailServicesDomainGet':
			return hostedEmailServicesDomainGet.execute.call(this);
		case 'migrationOffersPost':
			return migrationOffersPost.execute.call(this);
		case 'migrationServicesToDeleteUnpackTermsPost':
			return migrationServicesToDeleteUnpackTermsPost.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'domainServicesGet':
			return domainServicesGet.execute.call(this);
		case 'emailProServicesGet':
			return emailProServicesGet.execute.call(this);
		case 'exchangeAccountServicesGet':
			return exchangeAccountServicesGet.execute.call(this);
		case 'exchangeOrganizationServicesGet':
			return exchangeOrganizationServicesGet.execute.call(this);
		case 'hostedEmailServicesGet':
			return hostedEmailServicesGet.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'migrationMigratePost':
			return migratePost.execute.call(this);
		case 'addressMoveMoveOfferPost':
			return moveOfferPost.execute.call(this);
		case 'updatePut':
			return updatePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
