import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// eligibilityRecall operations
import * as recallGet from './resources/eligibilityRecall/recallGet.operation';
import * as recallPost from './resources/eligibilityRecall/recallPost.operation';
import * as recallDetailGet from './resources/eligibilityRecall/recallDetailGet.operation';
import * as recallUpdatePut from './resources/eligibilityRecall/recallUpdatePut.operation';
import * as recallDelete from './resources/eligibilityRecall/recallDelete.operation';

// eligibilityTest operations
import * as testGet from './resources/eligibilityTest/testGet.operation';
import * as testAddressPost from './resources/eligibilityTest/testAddressPost.operation';
import * as testAddressPartnersPost from './resources/eligibilityTest/testAddressPartnersPost.operation';
import * as testBuildingPost from './resources/eligibilityTest/testBuildingPost.operation';
import * as testBuildingPartnersPost from './resources/eligibilityTest/testBuildingPartnersPost.operation';
import * as testLinePost from './resources/eligibilityTest/testLinePost.operation';
import * as testLinePartnersPost from './resources/eligibilityTest/testLinePartnersPost.operation';
import * as testOtpPost from './resources/eligibilityTest/testOtpPost.operation';
import * as testOtpPartnersPost from './resources/eligibilityTest/testOtpPartnersPost.operation';

// eligibilitySearch operations
import * as searchAddressesPost from './resources/eligibilitySearch/searchAddressesPost.operation';
import * as searchBuildingDetailsPost from './resources/eligibilitySearch/searchBuildingDetailsPost.operation';
import * as searchBuildingsPost from './resources/eligibilitySearch/searchBuildingsPost.operation';
import * as searchBuildingsByLinePost from './resources/eligibilitySearch/searchBuildingsByLinePost.operation';
import * as searchCitiesPost from './resources/eligibilitySearch/searchCitiesPost.operation';
import * as searchLinesPost from './resources/eligibilitySearch/searchLinesPost.operation';
import * as searchMeetingsPost from './resources/eligibilitySearch/searchMeetingsPost.operation';
import * as searchStreetNumbersPost from './resources/eligibilitySearch/searchStreetNumbersPost.operation';
import * as searchStreetNumbersDetailsPost from './resources/eligibilitySearch/searchStreetNumbersDetailsPost.operation';
import * as searchStreetsPost from './resources/eligibilitySearch/searchStreetsPost.operation';

// maintenanceMonitoring operations
import * as workPlannedPublicGet from './resources/maintenanceMonitoring/workPlannedPublicGet.operation';
import * as workPlannedPartnersGet from './resources/maintenanceMonitoring/workPlannedPartnersGet.operation';
import * as genericIncidentPublicGet from './resources/maintenanceMonitoring/genericIncidentPublicGet.operation';
import * as genericIncidentPartnersGet from './resources/maintenanceMonitoring/genericIncidentPartnersGet.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'connectivityOperation',
		type: 'options',
		noDataExpression: true,
		default: 'recallGet',
		options: [
			{
				name: 'Create Eligibility Recall',
				value: 'recallPost',
				action: 'Create a new eligibility recall to check connection options',
			},
			{
				name: 'Delete Eligibility Recall',
				value: 'recallDelete',
				action: 'Delete a specific eligibility recall',
			},
			{
				name: 'Get Eligibility Recall',
				value: 'recallDetailGet',
				action: 'Get the details of a specific eligibility recall',
			},
			{
				name: 'Get Eligibility Test',
				value: 'testGet',
				action: 'Get the details of an eligibility test by its reference',
			},
			{
				name: 'List Eligibility Recalls',
				value: 'recallGet',
				action: 'List the eligibility recalls created for a customer',
			},
			{
				name: 'List Generic Incidents (Partners)',
				value: 'genericIncidentPartnersGet',
				action:
					'List the detected, validated and recently closed generic incidents, reserved for partners',
			},
			{
				name: 'List Generic Incidents (Public)',
				value: 'genericIncidentPublicGet',
				action: 'List the validated and recently closed generic incidents',
			},
			{
				name: 'List Planned Works (Partners)',
				value: 'workPlannedPartnersGet',
				action: 'List the planned works published by the operators, reserved for partners',
			},
			{
				name: 'List Planned Works (Public)',
				value: 'workPlannedPublicGet',
				action: 'List the planned works published by the operators',
			},
			{
				name: 'Search Addresses',
				value: 'searchAddressesPost',
				action: 'Search for addresses near a geographic position',
			},
			{
				name: 'Search Building Details',
				value: 'searchBuildingDetailsPost',
				action: 'Get the detailed information about a specific building',
			},
			{
				name: 'Search Buildings',
				value: 'searchBuildingsPost',
				action: 'Get all the buildings for a specific address',
			},
			{
				name: 'Search Buildings by Line',
				value: 'searchBuildingsByLinePost',
				action: 'Get the building references from a line number',
			},
			{
				name: 'Search Cities',
				value: 'searchCitiesPost',
				action: 'Get all the cities associated with a postal code',
			},
			{
				name: 'Search Lines',
				value: 'searchLinesPost',
				action: 'Search the active and inactive lines at an address',
			},
			{
				name: 'Search Meetings',
				value: 'searchMeetingsPost',
				action: 'Search the available meeting slots for copper line creation or fiber installation',
			},
			{
				name: 'Search Street Numbers',
				value: 'searchStreetNumbersPost',
				action: 'Get the available street numbers for a street code',
			},
			{
				name: 'Search Street Numbers Details',
				value: 'searchStreetNumbersDetailsPost',
				action: 'Get the details of the available street numbers for a street code',
			},
			{
				name: 'Search Streets',
				value: 'searchStreetsPost',
				action: 'Get all the streets associated with a city INSEE code',
			},
			{
				name: 'Test Eligibility by Address',
				value: 'testAddressPost',
				action: 'Run an eligibility test for a specific address',
			},
			{
				name: 'Test Eligibility by Address (Partners)',
				value: 'testAddressPartnersPost',
				action: 'Run an eligibility test by address, reserved for partners',
			},
			{
				name: 'Test Eligibility by Building',
				value: 'testBuildingPost',
				action: 'Run an eligibility test for a building, fiber only',
			},
			{
				name: 'Test Eligibility by Building (Partners)',
				value: 'testBuildingPartnersPost',
				action: 'Run an eligibility test by building, reserved for partners',
			},
			{
				name: 'Test Eligibility by Line',
				value: 'testLinePost',
				action: 'Run an eligibility test for a line number, copper only',
			},
			{
				name: 'Test Eligibility by Line (Partners)',
				value: 'testLinePartnersPost',
				action: 'Run an eligibility test by line, reserved for partners',
			},
			{
				name: 'Test Eligibility by OTP',
				value: 'testOtpPost',
				action: 'Run an eligibility test for an OTP, fiber only',
			},
			{
				name: 'Test Eligibility by OTP (Partners)',
				value: 'testOtpPartnersPost',
				action: 'Run an eligibility test by OTP, reserved for partners',
			},
			{
				name: 'Update Eligibility Recall',
				value: 'recallUpdatePut',
				action: 'Modify the details of an existing eligibility recall',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('connectivityOperation', 0) as string;

	switch (operation) {
		case 'recallPost':
			return recallPost.execute.call(this);
		case 'recallDelete':
			return recallDelete.execute.call(this);
		case 'recallDetailGet':
			return recallDetailGet.execute.call(this);
		case 'testGet':
			return testGet.execute.call(this);
		case 'recallGet':
			return recallGet.execute.call(this);
		case 'genericIncidentPartnersGet':
			return genericIncidentPartnersGet.execute.call(this);
		case 'genericIncidentPublicGet':
			return genericIncidentPublicGet.execute.call(this);
		case 'workPlannedPartnersGet':
			return workPlannedPartnersGet.execute.call(this);
		case 'workPlannedPublicGet':
			return workPlannedPublicGet.execute.call(this);
		case 'searchAddressesPost':
			return searchAddressesPost.execute.call(this);
		case 'searchBuildingDetailsPost':
			return searchBuildingDetailsPost.execute.call(this);
		case 'searchBuildingsPost':
			return searchBuildingsPost.execute.call(this);
		case 'searchBuildingsByLinePost':
			return searchBuildingsByLinePost.execute.call(this);
		case 'searchCitiesPost':
			return searchCitiesPost.execute.call(this);
		case 'searchLinesPost':
			return searchLinesPost.execute.call(this);
		case 'searchMeetingsPost':
			return searchMeetingsPost.execute.call(this);
		case 'searchStreetNumbersPost':
			return searchStreetNumbersPost.execute.call(this);
		case 'searchStreetNumbersDetailsPost':
			return searchStreetNumbersDetailsPost.execute.call(this);
		case 'searchStreetsPost':
			return searchStreetsPost.execute.call(this);
		case 'testAddressPost':
			return testAddressPost.execute.call(this);
		case 'testAddressPartnersPost':
			return testAddressPartnersPost.execute.call(this);
		case 'testBuildingPost':
			return testBuildingPost.execute.call(this);
		case 'testBuildingPartnersPost':
			return testBuildingPartnersPost.execute.call(this);
		case 'testLinePost':
			return testLinePost.execute.call(this);
		case 'testLinePartnersPost':
			return testLinePartnersPost.execute.call(this);
		case 'testOtpPost':
			return testOtpPost.execute.call(this);
		case 'testOtpPartnersPost':
			return testOtpPartnersPost.execute.call(this);
		case 'recallUpdatePut':
			return recallUpdatePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
