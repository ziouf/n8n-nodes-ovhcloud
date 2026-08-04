import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your SMS offer',
			displayOptions,
		},
		{
			displayName: 'Country Currency Price',
			name: 'countryCurrencyPrice',
			type: 'options',
			default: 'all',
			options: [{ name: 'All', value: 'all' }, { name: 'Ca', value: 'ca' }, { name: 'Cz', value: 'cz' }, { name: 'De', value: 'de' }, { name: 'En', value: 'en' }, { name: 'Es', value: 'es' }, { name: 'Fi', value: 'fi' }, { name: 'Fr', value: 'fr' }, { name: 'Gb', value: 'gb' }, { name: 'Ie', value: 'ie' }, { name: 'It', value: 'it' }, { name: 'Lt', value: 'lt' }, { name: 'Ma', value: 'ma' }, { name: 'Nl', value: 'nl' }, { name: 'Pl', value: 'pl' }, { name: 'Pp', value: 'pp' }, { name: 'Pt', value: 'pt' }, { name: 'Qc', value: 'qc' }, { name: 'Ru', value: 'ru' }, { name: 'Sk', value: 'sk' }, { name: 'Sn', value: 'sn' }, { name: 'Tn', value: 'tn' }, { name: 'We', value: 'we' }],
			required: true,
			description: 'Filter to have the currency country prices',
			displayOptions,
		},
		{
			displayName: 'Country Destination',
			name: 'countryDestination',
			type: 'options',
			default: 'ad',
			options: [{ name: 'Ad', value: 'ad' }, { name: 'Ae', value: 'ae' }, { name: 'Af', value: 'af' }, { name: 'Ag', value: 'ag' }, { name: 'Ai', value: 'ai' }, { name: 'Al', value: 'al' }, { name: 'All', value: 'all' }, { name: 'Am', value: 'am' }, { name: 'An', value: 'an' }, { name: 'Ao', value: 'ao' }, { name: 'Ar', value: 'ar' }, { name: 'At', value: 'at' }, { name: 'Au', value: 'au' }, { name: 'Aw', value: 'aw' }, { name: 'Az', value: 'az' }, { name: 'Ba', value: 'ba' }, { name: 'Bb', value: 'bb' }, { name: 'Bd', value: 'bd' }, { name: 'Be', value: 'be' }, { name: 'Bf', value: 'bf' }, { name: 'Bg', value: 'bg' }, { name: 'Bh', value: 'bh' }, { name: 'Bi', value: 'bi' }, { name: 'Bj', value: 'bj' }, { name: 'Bm', value: 'bm' }, { name: 'Bn', value: 'bn' }, { name: 'Bo', value: 'bo' }, { name: 'Br', value: 'br' }, { name: 'Bs', value: 'bs' }, { name: 'Bt', value: 'bt' }, { name: 'Bw', value: 'bw' }, { name: 'By', value: 'by' }, { name: 'Bz', value: 'bz' }, { name: 'Ca', value: 'ca' }, { name: 'Cd', value: 'cd' }, { name: 'Cf', value: 'cf' }, { name: 'Cg', value: 'cg' }, { name: 'Ch', value: 'ch' }, { name: 'Ci', value: 'ci' }, { name: 'Ck', value: 'ck' }, { name: 'Cl', value: 'cl' }, { name: 'Cm', value: 'cm' }, { name: 'Cn', value: 'cn' }, { name: 'Co', value: 'co' }, { name: 'Cr', value: 'cr' }, { name: 'Cu', value: 'cu' }, { name: 'Cv', value: 'cv' }, { name: 'Cy', value: 'cy' }, { name: 'Cz', value: 'cz' }, { name: 'De', value: 'de' }, { name: 'Dk', value: 'dk' }, { name: 'Dm', value: 'dm' }, { name: 'Dz', value: 'dz' }, { name: 'Ec', value: 'ec' }, { name: 'Ee', value: 'ee' }, { name: 'Eg', value: 'eg' }, { name: 'Es', value: 'es' }, { name: 'Et', value: 'et' }, { name: 'Fi', value: 'fi' }, { name: 'Fj', value: 'fj' }, { name: 'Fk', value: 'fk' }, { name: 'Fo', value: 'fo' }, { name: 'Fr', value: 'fr' }, { name: 'Ga', value: 'ga' }, { name: 'Gb', value: 'gb' }, { name: 'Gd', value: 'gd' }, { name: 'Ge', value: 'ge' }, { name: 'Gf', value: 'gf' }, { name: 'Gh', value: 'gh' }, { name: 'Gi', value: 'gi' }, { name: 'Gl', value: 'gl' }, { name: 'Gm', value: 'gm' }, { name: 'Gn', value: 'gn' }, { name: 'Gp', value: 'gp' }, { name: 'Gq', value: 'gq' }, { name: 'Gr', value: 'gr' }, { name: 'Gt', value: 'gt' }, { name: 'Gu', value: 'gu' }, { name: 'Gw', value: 'gw' }, { name: 'Gy', value: 'gy' }, { name: 'Hk', value: 'hk' }, { name: 'Hn', value: 'hn' }, { name: 'Hr', value: 'hr' }, { name: 'Ht', value: 'ht' }, { name: 'Hu', value: 'hu' }, { name: 'ID', value: 'id' }, { name: 'Ie', value: 'ie' }, { name: 'Il', value: 'il' }, { name: 'In', value: 'in' }, { name: 'Io', value: 'io' }, { name: 'Iq', value: 'iq' }, { name: 'Ir', value: 'ir' }, { name: 'Is', value: 'is' }, { name: 'It', value: 'it' }, { name: 'Jm', value: 'jm' }, { name: 'Jo', value: 'jo' }, { name: 'Jp', value: 'jp' }, { name: 'Ke', value: 'ke' }, { name: 'Kg', value: 'kg' }, { name: 'Kh', value: 'kh' }, { name: 'Km', value: 'km' }, { name: 'Kn', value: 'kn' }, { name: 'Kr', value: 'kr' }, { name: 'Kw', value: 'kw' }, { name: 'Ky', value: 'ky' }, { name: 'Kz', value: 'kz' }, { name: 'La', value: 'la' }, { name: 'Lb', value: 'lb' }, { name: 'Lc', value: 'lc' }, { name: 'Li', value: 'li' }, { name: 'Lk', value: 'lk' }, { name: 'Lr', value: 'lr' }, { name: 'Ls', value: 'ls' }, { name: 'Lt', value: 'lt' }, { name: 'Lu', value: 'lu' }, { name: 'Lv', value: 'lv' }, { name: 'Ly', value: 'ly' }, { name: 'Ma', value: 'ma' }, { name: 'Md', value: 'md' }, { name: 'Me', value: 'me' }, { name: 'Mg', value: 'mg' }, { name: 'Mk', value: 'mk' }, { name: 'Ml', value: 'ml' }, { name: 'Mn', value: 'mn' }, { name: 'Mo', value: 'mo' }, { name: 'Mq', value: 'mq' }, { name: 'Mr', value: 'mr' }, { name: 'Ms', value: 'ms' }, { name: 'Mt', value: 'mt' }, { name: 'Mu', value: 'mu' }, { name: 'Mv', value: 'mv' }, { name: 'Mw', value: 'mw' }, { name: 'Mx', value: 'mx' }, { name: 'My', value: 'my' }, { name: 'Mz', value: 'mz' }, { name: 'Na', value: 'na' }, { name: 'Nc', value: 'nc' }, { name: 'Ne', value: 'ne' }, { name: 'Ng', value: 'ng' }, { name: 'Ni', value: 'ni' }, { name: 'Nl', value: 'nl' }, { name: 'No', value: 'no' }, { name: 'Np', value: 'np' }, { name: 'Nz', value: 'nz' }, { name: 'Om', value: 'om' }, { name: 'Pa', value: 'pa' }, { name: 'Pe', value: 'pe' }, { name: 'Pf', value: 'pf' }, { name: 'Pg', value: 'pg' }, { name: 'Ph', value: 'ph' }, { name: 'Pk', value: 'pk' }, { name: 'Pl', value: 'pl' }, { name: 'Ps', value: 'ps' }, { name: 'Pt', value: 'pt' }, { name: 'Py', value: 'py' }, { name: 'Qa', value: 'qa' }, { name: 'Re', value: 're' }, { name: 'Ro', value: 'ro' }, { name: 'Rs', value: 'rs' }, { name: 'Ru', value: 'ru' }, { name: 'Rw', value: 'rw' }, { name: 'Sa', value: 'sa' }, { name: 'Sb', value: 'sb' }, { name: 'Sc', value: 'sc' }, { name: 'Sd', value: 'sd' }, { name: 'Se', value: 'se' }, { name: 'Sg', value: 'sg' }, { name: 'Si', value: 'si' }, { name: 'Sk', value: 'sk' }, { name: 'Sl', value: 'sl' }, { name: 'Sm', value: 'sm' }, { name: 'Sn', value: 'sn' }, { name: 'So', value: 'so' }, { name: 'Sr', value: 'sr' }, { name: 'St', value: 'st' }, { name: 'Sv', value: 'sv' }, { name: 'Sy', value: 'sy' }, { name: 'Sz', value: 'sz' }, { name: 'Tc', value: 'tc' }, { name: 'Td', value: 'td' }, { name: 'Tg', value: 'tg' }, { name: 'Th', value: 'th' }, { name: 'Tj', value: 'tj' }, { name: 'Tl', value: 'tl' }, { name: 'Tm', value: 'tm' }, { name: 'Tn', value: 'tn' }, { name: 'To', value: 'to' }, { name: 'Tr', value: 'tr' }, { name: 'Tt', value: 'tt' }, { name: 'Tw', value: 'tw' }, { name: 'Tz', value: 'tz' }, { name: 'Ua', value: 'ua' }, { name: 'Ug', value: 'ug' }, { name: 'Us', value: 'us' }, { name: 'Uy', value: 'uy' }, { name: 'Uz', value: 'uz' }, { name: 'Vc', value: 'vc' }, { name: 'Ve', value: 've' }, { name: 'Vg', value: 'vg' }, { name: 'Vi', value: 'vi' }, { name: 'Vn', value: 'vn' }, { name: 'Vu', value: 'vu' }, { name: 'Ws', value: 'ws' }, { name: 'Ye', value: 'ye' }, { name: 'Yt', value: 'yt' }, { name: 'Za', value: 'za' }, { name: 'Zm', value: 'zm' }, { name: 'Zw', value: 'zw' }],
			required: true,
			description: 'Filter to have the country destination',
			displayOptions,
		},
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'options',
			default: '100',
			options: [{ name: '100', value: '100' }, { name: '200', value: '200' }, { name: '250', value: '250' }, { name: '500', value: '500' }, { name: '1000', value: '1000' }, { name: '2500', value: '2500' }, { name: '5000', value: '5000' }, { name: '10000', value: '10000' }, { name: '25000', value: '25000' }, { name: '50000', value: '50000' }, { name: '100000', value: '100000' }, { name: '1000000', value: '1000000' }],
			required: true,
			description: 'Sms pack offer quantity',
			displayOptions,
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/seeOffers operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/seeOffers
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const countryCurrencyPrice = this.getNodeParameter('countryCurrencyPrice', 0) as string;
	const countryDestination = this.getNodeParameter('countryDestination', 0) as string;
	const quantity = this.getNodeParameter('quantity', 0) as string;
	const qs: IDataObject = {};
	qs['countryCurrencyPrice'] = countryCurrencyPrice;
	qs['countryDestination'] = countryDestination;
	qs['quantity'] = quantity;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/seeOffers`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data as IDataObject[]);
}
