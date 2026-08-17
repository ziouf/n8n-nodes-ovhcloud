import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as domainServicesPostExecute } from './resources/domain/servicesPost.operation';
import { execute as emailProServicesPostExecute } from './resources/emailPro/servicesPost.operation';
import { execute as hostedEmailServicesPostExecute } from './resources/hostedEmail/servicesPost.operation';
import { execute as cancelResiliationPostExecute } from './resources/main/cancelResiliationPost.operation';
import { execute as changeContactPostExecute } from './resources/main/changeContactPost.operation';
import { execute as hostedEmailServicesDomainChangePasswordPostExecute } from './resources/hostedEmail/servicesDomainChangePasswordPost.operation';
import { execute as emailProOptionsIsEmailAvailableGetExecute } from './resources/emailPro/optionsIsEmailAvailableGet.operation';
import { execute as exchangeIndividualOptionsIsEmailAvailableGetExecute } from './resources/exchange/exchangeIndividualOptionsIsEmailAvailableGet.operation';
import { execute as canCancelResiliationGetExecute } from './resources/main/canCancelResiliationGet.operation';
import { execute as hostedEmailServicesDomainDeleteExecute } from './resources/hostedEmail/servicesDomainDelete.operation';
import { execute as offersPostExecute } from './resources/addressMove/offersPost.operation';
import { execute as servicesToDeleteUnpackTermsPostExecute } from './resources/addressMove/servicesToDeleteUnpackTermsPost.operation';
import { execute as optionsTldsGetExecute } from './resources/domain/optionsTldsGet.operation';
import { execute as optionsDomainsGetExecute } from './resources/emailPro/optionsDomainsGet.operation';
import { execute as exchangeIndividualOptionsDomainsGetExecute } from './resources/exchange/exchangeIndividualOptionsDomainsGet.operation';
import { execute as hostedEmailOptionsDomainsGetExecute } from './resources/hostedEmail/optionsDomainsGet.operation';
import { execute as contactOwnerGetExecute } from './resources/main/contactOwnerGet.operation';
import { execute as exchangeAccountServicesDomainGetExecute } from './resources/exchange/exchangeAccountServicesDomainGet.operation';
import { execute as hostedEmailServicesDomainAccountGetExecute } from './resources/hostedEmail/servicesDomainAccountGet.operation';
import { execute as hostedEmailServicesDomainConfigurationGetExecute } from './resources/hostedEmail/servicesDomainConfigurationGet.operation';
import { execute as hostedEmailServicesDomainGetExecute } from './resources/hostedEmail/servicesDomainGet.operation';
import { execute as migrationOffersPostExecute } from './resources/migration/offersPost.operation';
import { execute as migrationServicesToDeleteUnpackTermsPostExecute } from './resources/migration/servicesToDeleteUnpackTermsPost.operation';
import { execute as getExecute } from './resources/main/get.operation';
import { execute as domainServicesGetExecute } from './resources/domain/servicesGet.operation';
import { execute as emailProServicesGetExecute } from './resources/emailPro/servicesGet.operation';
import { execute as exchangeAccountServicesGetExecute } from './resources/exchange/exchangeAccountServicesGet.operation';
import { execute as exchangeOrganizationServicesGetExecute } from './resources/exchange/exchangeOrganizationServicesGet.operation';
import { execute as hostedEmailServicesGetExecute } from './resources/hostedEmail/servicesGet.operation';
import { execute as listExecute } from './resources/main/list.operation';
import { execute as migratePostExecute } from './resources/migration/migratePost.operation';
import { execute as moveOfferPostExecute } from './resources/addressMove/moveOfferPost.operation';
import { execute as updatePutExecute } from './resources/main/updatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'packXdslOperation',
	'packxdsl',
	[
	{
		name: 'Activate Domain Service',
		value: 'domainServicesPost',
		action: 'Activate a domain service in the pack',
		execute: domainServicesPostExecute,
		description: noProps,
	},
	{
		name: 'Activate Email Pro Service',
		value: 'emailProServicesPost',
		action: 'Activate an Email Pro service',
		execute: emailProServicesPostExecute,
		description: noProps,
	},
	{
		name: 'Activate Hosted Email Service',
		value: 'hostedEmailServicesPost',
		action: 'Activate a hosted email service',
		execute: hostedEmailServicesPostExecute,
		description: noProps,
	},
	{
		name: 'Cancel Resiliation',
		value: 'cancelResiliationPost',
		action: 'Cancel the ongoing resiliation',
		execute: cancelResiliationPostExecute,
		description: noProps,
	},
	{
		name: 'Change Contacts',
		value: 'changeContactPost',
		action: 'Launch a contact change procedure',
		execute: changeContactPostExecute,
		description: noProps,
	},
	{
		name: 'Change Hosted Email Password',
		value: 'hostedEmailServicesDomainChangePasswordPost',
		action: 'Change hosted email account password',
		execute: hostedEmailServicesDomainChangePasswordPostExecute,
		description: noProps,
	},
	{
		name: 'Check Email Pro Email Availability',
		value: 'emailProOptionsIsEmailAvailableGet',
		action: 'Check if an email address is available for Email Pro activation',
		execute: emailProOptionsIsEmailAvailableGetExecute,
		description: noProps,
	},
	{
		name: 'Check Exchange Individual Email Availability',
		value: 'exchangeIndividualOptionsIsEmailAvailableGet',
		action: 'Check if an email address is available for Exchange Individual service creation',
		execute: exchangeIndividualOptionsIsEmailAvailableGetExecute,
		description: noProps,
	},
	{
		name: 'Check If Resiliation Can Be Cancelled',
		value: 'canCancelResiliationGet',
		action: 'Check if the resiliation can be cancelled',
		execute: canCancelResiliationGetExecute,
		description: noProps,
	},
	{
		name: 'Delete Hosted Email Service',
		value: 'hostedEmailServicesDomainDelete',
		action: 'Delete a hosted email account',
		execute: hostedEmailServicesDomainDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get Address Move Offers',
		value: 'addressMoveOffersPost',
		action: 'Get the possibilities of address move offers',
		execute: offersPostExecute,
		description: noProps,
	},
	{
		name: 'Get Address Move Services To Delete',
		value: 'addressMoveServicesToDeleteUnpackTermsPost',
		action: 'Calculate services to delete with unpack terms for address move',
		execute: servicesToDeleteUnpackTermsPostExecute,
		description: noProps,
	},
	{
		name: 'Get Available Domain TLDs',
		value: 'domainOptionsTldsGet',
		action: 'Get the available TLDs for domain order',
		execute: optionsTldsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Available Email Pro Domains',
		value: 'emailProOptionsDomainsGet',
		action: 'List the available domains for the Email Pro service',
		execute: optionsDomainsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Available Exchange Individual Domains',
		value: 'exchangeIndividualOptionsDomainsGet',
		action: 'Get the available domains for the Exchange Individual service',
		execute: exchangeIndividualOptionsDomainsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Available Hosted Email Domains',
		value: 'hostedEmailOptionsDomainsGet',
		action: 'Get the available domains for the Hosted Email service',
		execute: hostedEmailOptionsDomainsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Contact Owner',
		value: 'contactOwnerGet',
		action: 'Get contact information about the owner',
		execute: contactOwnerGetExecute,
		description: noProps,
	},
	{
		name: 'Get Exchange Account Service',
		value: 'exchangeAccountServicesDomainGet',
		action: 'Get the properties of an Exchange 2013 service',
		execute: exchangeAccountServicesDomainGetExecute,
		description: noProps,
	},
	{
		name: 'Get Hosted Email Account',
		value: 'hostedEmailServicesDomainAccountGet',
		action: 'Get hosted email account information',
		execute: hostedEmailServicesDomainAccountGetExecute,
		description: noProps,
	},
	{
		name: 'Get Hosted Email Configuration',
		value: 'hostedEmailServicesDomainConfigurationGet',
		action: 'Get hosted email configuration information',
		execute: hostedEmailServicesDomainConfigurationGetExecute,
		description: noProps,
	},
	{
		name: 'Get Hosted Email Service',
		value: 'hostedEmailServicesDomainGet',
		action: 'Get the properties of a hosted email service',
		execute: hostedEmailServicesDomainGetExecute,
		description: noProps,
	},
	{
		name: 'Get Migration Offers',
		value: 'migrationOffersPost',
		action: 'Get the possibilities of migration offers',
		execute: migrationOffersPostExecute,
		description: noProps,
	},
	{
		name: 'Get Migration Services To Delete',
		value: 'migrationServicesToDeleteUnpackTermsPost',
		action: 'Calculate services to delete with migration terms',
		execute: migrationServicesToDeleteUnpackTermsPostExecute,
		description: noProps,
	},
	{
		name: 'Get Pack Xdsl',
		value: 'get',
		action: 'Get the properties of a pack',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'List Domain Services',
		value: 'domainServicesGet',
		action: 'List the domain services of the pack',
		execute: domainServicesGetExecute,
		description: noProps,
	},
	{
		name: 'List Email Pro Services',
		value: 'emailProServicesGet',
		action: 'List the Email Pro services',
		execute: emailProServicesGetExecute,
		description: noProps,
	},
	{
		name: 'List Exchange Account Services',
		value: 'exchangeAccountServicesGet',
		action: 'List the Exchange 2013 services',
		execute: exchangeAccountServicesGetExecute,
		description: noProps,
	},
	{
		name: 'List Exchange Organization Services',
		value: 'exchangeOrganizationServicesGet',
		action: 'List the Exchange 2013 organization services',
		execute: exchangeOrganizationServicesGetExecute,
		description: noProps,
	},
	{
		name: 'List Hosted Email Services',
		value: 'hostedEmailServicesGet',
		action: 'List the hosted email services',
		execute: hostedEmailServicesGetExecute,
		description: noProps,
	},
	{
		name: 'List Pack Xdsl Services',
		value: 'list',
		action: 'List available Pack Xdsl services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Migrate To Offer',
		value: 'migrationMigratePost',
		action: 'Migrate to the selected offer',
		execute: migratePostExecute,
		description: noProps,
	},
	{
		name: 'Move Access To Another Address',
		value: 'addressMoveMoveOfferPost',
		action: 'Move the access to another address',
		execute: moveOfferPostExecute,
		description: noProps,
	},
	{
		name: 'Update Pack Xdsl',
		value: 'updatePut',
		action: 'Update the properties of a pack',
		execute: updatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
