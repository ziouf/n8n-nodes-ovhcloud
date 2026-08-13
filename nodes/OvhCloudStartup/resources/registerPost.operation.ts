import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

/** Enum values accepted by the OVHcloud startup API. */
const AWARENESS_OPTIONS = [
	{ name: 'Email', value: 'Email' },
	{ name: 'Empact Venture', value: 'EmpactVenture' },
	{ name: 'Event', value: 'Event' },
	{ name: 'Facebook', value: 'Facebook' },
	{ name: 'Internet Search', value: 'InternetSearch' },
	{ name: 'LinkedIn', value: 'LinkedIn' },
	{ name: 'Online Advert', value: 'OnlineAdvert' },
	{ name: 'Partner', value: 'Partner' },
	{ name: 'Twitter', value: 'Twitter' },
	{ name: 'Website', value: 'Website' },
	{ name: 'Word of Mouth', value: 'WordOfMouth' },
];

const EMPLOYEES_OPTIONS = [
	{ name: '1 or 2', value: '1Or2' },
	{ name: '3 to 5', value: '3To5' },
	{ name: '6 to 9', value: '6To9' },
	{ name: '10 to 19', value: '10To19' },
	{ name: '20 to 49', value: '20To49' },
	{ name: '50 to 99', value: '50To99' },
	{ name: '100 to 199', value: '100To199' },
	{ name: '200 to 249', value: '200To249' },
	{ name: '250 to 499', value: '250To499' },
];

const RELATED_INDUSTRY_OPTIONS = [
	{ name: 'AI Wholesale', value: 'AI_Wholesale' },
	{ name: 'Artisanat', value: 'ARTISANAT' },
	{ name: 'ASP / SI / IT Services', value: 'ASP_SI_ITServices' },
	{ name: 'Accommodation and Food Services', value: 'Accommodation_and_FoodServices' },
	{ name: 'Agriculture', value: 'Agriculture' },
	{ name: 'Agro Industry', value: 'Agro_industry' },
	{ name: 'Art, Sport and Entertainment', value: 'Art_Sport_Entertainment' },
	{ name: 'Automotive', value: 'Automotive' },
	{ name: 'Banking', value: 'Banking' },
	{ name: 'Construction and Architecture', value: 'Construction_and_Architecture' },
	{ name: 'Databases Wholesale', value: 'Databases_Wholesale' },
	{ name: 'Digital Services', value: 'DigitalServices' },
	{ name: 'E Retail', value: 'E_Retail' },
	{ name: 'Educational Services', value: 'EducationalServices' },
	{ name: 'Energy and Water', value: 'Energy_and_Water' },
	{ name: 'Game Wholesale', value: 'Game_Wholesale' },
	{ name: 'Head Office', value: 'HeadOffice' },
	{ name: 'Healthcare', value: 'Healthcare' },
	{ name: 'Host the Hoster Wholesale', value: 'Host_the_Hoster_Wholesale' },
	{ name: 'Human Resources', value: 'Human_Resources' },
	{ name: 'IaaS Providers / Web Hosters / Data', value: 'IAASproviders_WebHosters_Data' },
	{ name: 'Life Sciences', value: 'Life_Sciences' },
	{ name: 'Manufacturing Industry', value: 'Manufacturing_Industry' },
	{ name: 'Mining Industry', value: 'Mining_Industry' },
	{ name: 'Non Profit', value: 'NonProfit' },
	{ name: 'Other Services Business', value: 'Other_Services_Business' },
	{ name: 'Other Services Personal', value: 'Other_Services_Personal' },
	{ name: 'Others', value: 'Others' },
	{ name: 'Public Sector', value: 'PublicSector' },
	{ name: 'Real Estate', value: 'Real_Estate' },
	{ name: 'Retail and Trade', value: 'Retail_and_Trade' },
	{ name: 'Science R&D', value: 'ScienceR&D' },
	{ name: 'Software Editors', value: 'Software Editors' },
	{ name: 'Storage Wholesale', value: 'Storage_Wholesale' },
	{ name: 'TV Media', value: 'TV_Media' },
	{ name: 'Telecommunication Internet', value: 'Telecommunication_Internet' },
	{ name: 'Transportation Logistics', value: 'Transportation_Logistics' },
	{ name: 'Ventures for Good', value: 'Ventures_for_Good' },
	{ name: 'Virtualization Wholesale', value: 'Virtualization_Wholesale' },
	{ name: 'Web Agencies', value: 'WebAgencies' },
];

const LAST_FUNDRAISING_OPTIONS = [
	{ name: 'Crowdfunding', value: 'Crowdfunding' },
	{ name: 'Do Not Share', value: 'DontShare' },
	{ name: 'More', value: 'More' },
	{ name: 'No', value: 'No' },
	{ name: 'Pre Seed', value: 'PreSeed' },
	{ name: 'Seed', value: 'Seed' },
	{ name: 'Series A', value: 'Series_A' },
	{ name: 'Series B', value: 'Series_B' },
	{ name: 'Series C', value: 'Series_C' },
];

const PLANNED_FUND_RAISING_OPTIONS = [
	{ name: 'Do Not Share', value: 'DontShare' },
	{ name: 'No', value: 'No' },
	{ name: 'Yes', value: 'Yes' },
];

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Awareness',
			name: 'awarness',
			type: 'options',
			default: '',
			required: true,
			options: AWARENESS_OPTIONS,
			description: 'Where did you hear about OVHcloud',
			displayOptions,
		},
		{
			displayName: 'Event Code',
			name: 'eventCode',
			type: 'string',
			default: '',
			description: 'Code given to startups during events or partnerships',
			displayOptions,
		},
		{
			displayName: 'Company Name',
			name: 'companyName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the company',
			displayOptions,
		},
		{
			displayName: 'Company Website',
			name: 'societyWebsite',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Number of Employees',
			name: 'employeesNumber',
			type: 'options',
			default: '',
			options: EMPLOYEES_OPTIONS,
			description: 'Number of employees in the company',
			displayOptions,
		},
		{
			displayName: 'Related Industry',
			name: 'relatedIndustry',
			type: 'options',
			default: '',
			options: RELATED_INDUSTRY_OPTIONS,
			description: 'Society industries',
			displayOptions,
		},
		{
			displayName: 'Product Name',
			name: 'productName',
			type: 'string',
			default: '',
			required: true,
			description: 'Product or solution name',
			displayOptions,
		},
		{
			displayName: 'Project Description',
			name: 'projectDescription',
			type: 'string',
			default: '',
			description: 'What problem are you solving',
			displayOptions,
		},
		{
			displayName: 'Business Model',
			name: 'businessModel',
			type: 'string',
			default: '',
			description: 'Describe your business model',
			displayOptions,
		},
		{
			displayName: 'Development Stage',
			name: 'developmentStage',
			type: 'string',
			default: '',
			description: 'Stage of development description',
			displayOptions,
		},
		{
			displayName: 'Related Technologies',
			name: 'relatedTechnology',
			type: 'json',
			default: '[]',
			description:
				'Related technologies, as an array of strings (e.g. ["ArtificialIntelligence", "Big_Data"])',
			displayOptions,
		},
		{
			displayName: 'Last Fundraising',
			name: 'lastFundraising',
			type: 'options',
			default: '',
			options: LAST_FUNDRAISING_OPTIONS,
			displayOptions,
		},
		{
			displayName: 'Planned Fund Raising',
			name: 'plannedFundRaising',
			type: 'options',
			default: '',
			options: PLANNED_FUND_RAISING_OPTIONS,
			description: 'Next fundraising',
			displayOptions,
		},
	];
}

/**
 * Register a startup.
 *
 * HTTP method: POST
 * Endpoint: /startup
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	const awarness = this.getNodeParameter('awarness', _itemIndex ?? 0) as string;

	const body: IDataObject = { awarness };

	const eventCode = (this.getNodeParameter('eventCode', _itemIndex ?? 0, '') as string) || '';
	if (eventCode) body.eventCode = eventCode;

	const companyName = this.getNodeParameter('companyName', _itemIndex ?? 0) as string;
	const company: IDataObject = { name: companyName };

	const societyWebsite = (this.getNodeParameter('societyWebsite', _itemIndex ?? 0, '') as string) || '';
	if (societyWebsite) company.societyWebsite = societyWebsite;

	const employeesNumber = (this.getNodeParameter('employeesNumber', _itemIndex ?? 0, '') as string) || '';
	if (employeesNumber) company.employeesNumber = employeesNumber;

	const relatedIndustry = (this.getNodeParameter('relatedIndustry', _itemIndex ?? 0, '') as string) || '';
	if (relatedIndustry) company.relatedIndustry = relatedIndustry;

	body.company = company;

	const project: IDataObject = { productName: this.getNodeParameter('productName', _itemIndex ?? 0) as string };

	const projectDescription = (this.getNodeParameter('projectDescription', _itemIndex ?? 0, '') as string) || '';
	if (projectDescription) project.description = projectDescription;

	const businessModel = (this.getNodeParameter('businessModel', _itemIndex ?? 0, '') as string) || '';
	if (businessModel) project.businessModel = businessModel;

	const developmentStage = (this.getNodeParameter('developmentStage', _itemIndex ?? 0, '') as string) || '';
	if (developmentStage) project.developmentStage = developmentStage;

	const relatedTechnology = this.getNodeParameter('relatedTechnology', _itemIndex ?? 0, '[]') as string;
	if (relatedTechnology && relatedTechnology !== '[]') {
		project.relatedTechnology = JSON.parse(relatedTechnology);
	}

	body.project = project;

	const fundRaising: IDataObject = {};

	const lastFundraising = (this.getNodeParameter('lastFundraising', _itemIndex ?? 0, '') as string) || '';
	if (lastFundraising) fundRaising.lastFundraising = lastFundraising;

	const plannedFundRaising = (this.getNodeParameter('plannedFundRaising', _itemIndex ?? 0, '') as string) || '';
	if (plannedFundRaising) fundRaising.plannedFundRaising = plannedFundRaising;

	if (Object.keys(fundRaising).length > 0) {
		body.fundRaising = fundRaising;
	}

	await client.httpPost('/startup', body);

	return this.helpers.returnJsonArray([{ success: true }]);
}
