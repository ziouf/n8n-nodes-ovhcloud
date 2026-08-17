import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as recallPostExecute } from './resources/eligibilityRecall/recallPost.operation';
import { execute as recallDeleteExecute } from './resources/eligibilityRecall/recallDelete.operation';
import { execute as recallDetailGetExecute } from './resources/eligibilityRecall/recallDetailGet.operation';
import { execute as testGetExecute } from './resources/eligibilityTest/testGet.operation';
import { execute as recallGetExecute } from './resources/eligibilityRecall/recallGet.operation';
import { execute as genericIncidentPartnersGetExecute } from './resources/maintenanceMonitoring/genericIncidentPartnersGet.operation';
import { execute as genericIncidentPublicGetExecute } from './resources/maintenanceMonitoring/genericIncidentPublicGet.operation';
import { execute as workPlannedPartnersGetExecute } from './resources/maintenanceMonitoring/workPlannedPartnersGet.operation';
import { execute as workPlannedPublicGetExecute } from './resources/maintenanceMonitoring/workPlannedPublicGet.operation';
import { execute as searchAddressesPostExecute } from './resources/eligibilitySearch/searchAddressesPost.operation';
import { execute as searchBuildingDetailsPostExecute } from './resources/eligibilitySearch/searchBuildingDetailsPost.operation';
import { execute as searchBuildingsPostExecute } from './resources/eligibilitySearch/searchBuildingsPost.operation';
import { execute as searchBuildingsByLinePostExecute } from './resources/eligibilitySearch/searchBuildingsByLinePost.operation';
import { execute as searchCitiesPostExecute } from './resources/eligibilitySearch/searchCitiesPost.operation';
import { execute as searchLinesPostExecute } from './resources/eligibilitySearch/searchLinesPost.operation';
import { execute as searchMeetingsPostExecute } from './resources/eligibilitySearch/searchMeetingsPost.operation';
import { execute as searchStreetNumbersPostExecute } from './resources/eligibilitySearch/searchStreetNumbersPost.operation';
import { execute as searchStreetNumbersDetailsPostExecute } from './resources/eligibilitySearch/searchStreetNumbersDetailsPost.operation';
import { execute as searchStreetsPostExecute } from './resources/eligibilitySearch/searchStreetsPost.operation';
import { execute as testAddressPostExecute } from './resources/eligibilityTest/testAddressPost.operation';
import { execute as testAddressPartnersPostExecute } from './resources/eligibilityTest/testAddressPartnersPost.operation';
import { execute as testBuildingPostExecute } from './resources/eligibilityTest/testBuildingPost.operation';
import { execute as testBuildingPartnersPostExecute } from './resources/eligibilityTest/testBuildingPartnersPost.operation';
import { execute as testLinePostExecute } from './resources/eligibilityTest/testLinePost.operation';
import { execute as testLinePartnersPostExecute } from './resources/eligibilityTest/testLinePartnersPost.operation';
import { execute as testOtpPostExecute } from './resources/eligibilityTest/testOtpPost.operation';
import { execute as testOtpPartnersPostExecute } from './resources/eligibilityTest/testOtpPartnersPost.operation';
import { execute as recallUpdatePutExecute } from './resources/eligibilityRecall/recallUpdatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'connectivityOperation',
	'connectivity',
	[
	{
		name: 'Create Eligibility Recall',
		value: 'recallPost',
		action: 'Create a new eligibility recall to check connection options',
		execute: recallPostExecute,
		description: noProps,
	},
	{
		name: 'Delete Eligibility Recall',
		value: 'recallDelete',
		action: 'Delete a specific eligibility recall',
		execute: recallDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get Eligibility Recall',
		value: 'recallDetailGet',
		action: 'Get the details of a specific eligibility recall',
		execute: recallDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Eligibility Test',
		value: 'testGet',
		action: 'Get the details of an eligibility test by its reference',
		execute: testGetExecute,
		description: noProps,
	},
	{
		name: 'List Eligibility Recalls',
		value: 'recallGet',
		action: 'List the eligibility recalls created for a customer',
		execute: recallGetExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'List Generic Incidents (Partners)',
		value: 'genericIncidentPartnersGet',
		action: 'List the detected, validated and recently closed generic incidents, reserved for partners',
		execute: genericIncidentPartnersGetExecute,
		description: noProps,
	},
	{
		name: 'List Generic Incidents (Public)',
		value: 'genericIncidentPublicGet',
		action: 'List the validated and recently closed generic incidents',
		execute: genericIncidentPublicGetExecute,
		description: noProps,
	},
	{
		name: 'List Planned Works (Partners)',
		value: 'workPlannedPartnersGet',
		action: 'List the planned works published by the operators, reserved for partners',
		execute: workPlannedPartnersGetExecute,
		description: noProps,
	},
	{
		name: 'List Planned Works (Public)',
		value: 'workPlannedPublicGet',
		action: 'List the planned works published by the operators',
		execute: workPlannedPublicGetExecute,
		description: noProps,
	},
	{
		name: 'Search Addresses',
		value: 'searchAddressesPost',
		action: 'Search for addresses near a geographic position',
		execute: searchAddressesPostExecute,
		description: noProps,
	},
	{
		name: 'Search Building Details',
		value: 'searchBuildingDetailsPost',
		action: 'Get the detailed information about a specific building',
		execute: searchBuildingDetailsPostExecute,
		description: noProps,
	},
	{
		name: 'Search Buildings',
		value: 'searchBuildingsPost',
		action: 'Get all the buildings for a specific address',
		execute: searchBuildingsPostExecute,
		description: noProps,
	},
	{
		name: 'Search Buildings by Line',
		value: 'searchBuildingsByLinePost',
		action: 'Get the building references from a line number',
		execute: searchBuildingsByLinePostExecute,
		description: noProps,
	},
	{
		name: 'Search Cities',
		value: 'searchCitiesPost',
		action: 'Get all the cities associated with a postal code',
		execute: searchCitiesPostExecute,
		description: noProps,
	},
	{
		name: 'Search Lines',
		value: 'searchLinesPost',
		action: 'Search the active and inactive lines at an address',
		execute: searchLinesPostExecute,
		description: noProps,
	},
	{
		name: 'Search Meetings',
		value: 'searchMeetingsPost',
		action: 'Search the available meeting slots for copper line creation or fiber installation',
		execute: searchMeetingsPostExecute,
		description: noProps,
	},
	{
		name: 'Search Street Numbers',
		value: 'searchStreetNumbersPost',
		action: 'Get the available street numbers for a street code',
		execute: searchStreetNumbersPostExecute,
		description: noProps,
	},
	{
		name: 'Search Street Numbers Details',
		value: 'searchStreetNumbersDetailsPost',
		action: 'Get the details of the available street numbers for a street code',
		execute: searchStreetNumbersDetailsPostExecute,
		description: noProps,
	},
	{
		name: 'Search Streets',
		value: 'searchStreetsPost',
		action: 'Get all the streets associated with a city INSEE code',
		execute: searchStreetsPostExecute,
		description: noProps,
	},
	{
		name: 'Test Eligibility by Address',
		value: 'testAddressPost',
		action: 'Run an eligibility test for a specific address',
		execute: testAddressPostExecute,
		description: noProps,
	},
	{
		name: 'Test Eligibility by Address (Partners)',
		value: 'testAddressPartnersPost',
		action: 'Run an eligibility test by address, reserved for partners',
		execute: testAddressPartnersPostExecute,
		description: noProps,
	},
	{
		name: 'Test Eligibility by Building',
		value: 'testBuildingPost',
		action: 'Run an eligibility test for a building, fiber only',
		execute: testBuildingPostExecute,
		description: noProps,
	},
	{
		name: 'Test Eligibility by Building (Partners)',
		value: 'testBuildingPartnersPost',
		action: 'Run an eligibility test by building, reserved for partners',
		execute: testBuildingPartnersPostExecute,
		description: noProps,
	},
	{
		name: 'Test Eligibility by Line',
		value: 'testLinePost',
		action: 'Run an eligibility test for a line number, copper only',
		execute: testLinePostExecute,
		description: noProps,
	},
	{
		name: 'Test Eligibility by Line (Partners)',
		value: 'testLinePartnersPost',
		action: 'Run an eligibility test by line, reserved for partners',
		execute: testLinePartnersPostExecute,
		description: noProps,
	},
	{
		name: 'Test Eligibility by OTP',
		value: 'testOtpPost',
		action: 'Run an eligibility test for an OTP, fiber only',
		execute: testOtpPostExecute,
		description: noProps,
	},
	{
		name: 'Test Eligibility by OTP (Partners)',
		value: 'testOtpPartnersPost',
		action: 'Run an eligibility test by OTP, reserved for partners',
		execute: testOtpPartnersPostExecute,
		description: noProps,
	},
	{
		name: 'Update Eligibility Recall',
		value: 'recallUpdatePut',
		action: 'Modify the details of an existing eligibility recall',
		execute: recallUpdatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
