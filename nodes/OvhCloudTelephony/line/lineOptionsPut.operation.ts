import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
        {
          displayName: 'Billing Account',
          name: 'billingAccount',
          type: 'string',
          default: '',
          required: true,
          description: 'The name of your billingAccount',
          displayOptions,
        },
        {
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          displayOptions,
        },
        {
          displayName: 'Absent Subscriber',
          name: 'absentSubscriber',
          type: 'string',
          default: '',
          description: 'The absentSubscriber parameter',
          displayOptions,
        },
        {
          displayName: 'Anonymous Call Rejection',
          name: 'anonymousCallRejection',
          type: 'string',
          default: '',
          description: 'The anonymousCallRejection parameter',
          displayOptions,
        },
        {
          displayName: 'Call Restriction Incoming',
          name: 'callRestrictionIncoming',
          type: 'string',
          default: '',
          description: 'The callRestrictionIncoming parameter',
          displayOptions,
        },
        {
          displayName: 'Call Restriction Outgoing',
          name: 'callRestrictionOutgoing',
          type: 'string',
          default: '',
          description: 'The callRestrictionOutgoing parameter',
          displayOptions,
        },
        {
          displayName: 'Call Waiting',
          name: 'callWaiting',
          type: 'string',
          default: '',
          description: 'The callWaiting parameter',
          displayOptions,
        },
        {
          displayName: 'Codecs',
          name: 'codecs',
          type: 'string',
          default: '',
          description: 'The codecs parameter',
          displayOptions,
        },
        {
          displayName: 'Default Voicemail',
          name: 'defaultVoicemail',
          type: 'string',
          default: '',
          description: 'The defaultVoicemail parameter',
          displayOptions,
        },
        {
          displayName: 'Display Number',
          name: 'displayNumber',
          type: 'string',
          default: '',
          description: 'The displayNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Do Not Disturb',
          name: 'doNotDisturb',
          type: 'string',
          default: '',
          description: 'The doNotDisturb parameter',
          displayOptions,
        },
        {
          displayName: 'Domain',
          name: 'domain',
          type: 'string',
          default: '',
          description: 'The domain parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Backup',
          name: 'forwardBackup',
          type: 'string',
          default: '',
          description: 'The forwardBackup parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Backup Nature',
          name: 'forwardBackupNature',
          type: 'string',
          default: '',
          description: 'The forwardBackupNature parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Backup Number',
          name: 'forwardBackupNumber',
          type: 'string',
          default: '',
          description: 'The forwardBackupNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Busy',
          name: 'forwardBusy',
          type: 'string',
          default: '',
          description: 'The forwardBusy parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Busy Nature',
          name: 'forwardBusyNature',
          type: 'string',
          default: '',
          description: 'The forwardBusyNature parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Busy Number',
          name: 'forwardBusyNumber',
          type: 'string',
          default: '',
          description: 'The forwardBusyNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Forward No Reply',
          name: 'forwardNoReply',
          type: 'string',
          default: '',
          description: 'The forwardNoReply parameter',
          displayOptions,
        },
        {
          displayName: 'Forward No Reply Delay',
          name: 'forwardNoReplyDelay',
          type: 'string',
          default: '',
          description: 'The forwardNoReplyDelay parameter',
          displayOptions,
        },
        {
          displayName: 'Forward No Reply Nature',
          name: 'forwardNoReplyNature',
          type: 'string',
          default: '',
          description: 'The forwardNoReplyNature parameter',
          displayOptions,
        },
        {
          displayName: 'Forward No Reply Number',
          name: 'forwardNoReplyNumber',
          type: 'string',
          default: '',
          description: 'The forwardNoReplyNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Unconditional',
          name: 'forwardUnconditional',
          type: 'string',
          default: '',
          description: 'The forwardUnconditional parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Unconditional Nature',
          name: 'forwardUnconditionalNature',
          type: 'string',
          default: '',
          description: 'The forwardUnconditionalNature parameter',
          displayOptions,
        },
        {
          displayName: 'Forward Unconditional Number',
          name: 'forwardUnconditionalNumber',
          type: 'string',
          default: '',
          description: 'The forwardUnconditionalNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Identification Restriction',
          name: 'identificationRestriction',
          type: 'string',
          default: '',
          description: 'The identificationRestriction parameter',
          displayOptions,
        },
        {
          displayName: 'Intercom',
          name: 'intercom',
          type: 'string',
          default: '',
          description: 'The intercom parameter',
          displayOptions,
        },
        {
          displayName: 'Ip Restrictions',
          name: 'ipRestrictions',
          type: 'string',
          default: '',
          description: 'The ipRestrictions parameter',
          displayOptions,
        },
        {
          displayName: 'Language',
          name: 'language',
          type: 'string',
          default: '',
          description: 'The language parameter',
          displayOptions,
        },
        {
          displayName: 'Lock Out Call',
          name: 'lockOutCall',
          type: 'string',
          default: '',
          description: 'The lockOutCall parameter',
          displayOptions,
        },
        {
          displayName: 'Lock Out Call Password',
          name: 'lockOutCallPassword',
          type: 'string',
										typeOptions: { password: true },
          default: '',
          description: 'The lockOutCallPassword parameter',
          displayOptions,
        },
        {
          displayName: 'Proxy',
          name: 'proxy',
          type: 'string',
          default: '',
          description: 'The proxy parameter',
          displayOptions,
        },
        {
          displayName: 'Record Outgoing Calls Beta',
          name: 'recordOutgoingCallsBeta',
          type: 'string',
          default: '',
          description: 'The recordOutgoingCallsBeta parameter',
          displayOptions,
        },
        {
          displayName: 'Tone On Call Waiting Sound ID',
          name: 'toneOnCallWaitingSoundId',
          type: 'string',
          default: '',
          description: 'The toneOnCallWaitingSoundId parameter',
          displayOptions,
        },
        {
          displayName: 'Tone On Hold Sound ID',
          name: 'toneOnHoldSoundId',
          type: 'string',
          default: '',
          description: 'The toneOnHoldSoundId parameter',
          displayOptions,
        },
        {
          displayName: 'Tone Ringback Sound ID',
          name: 'toneRingbackSoundId',
          type: 'string',
          default: '',
          description: 'The toneRingbackSoundId parameter',
          displayOptions,
        },
        {
          displayName: 'Voicemail External Number',
          name: 'voicemailExternalNumber',
          type: 'string',
          default: '',
          description: 'The voicemailExternalNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Voicemail Internal Number',
          name: 'voicemailInternalNumber',
          type: 'string',
          default: '',
          description: 'The voicemailInternalNumber parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Options Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/options
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const absentSubscriber = this.getNodeParameter('absentSubscriber', _itemIndex) as string;
	const anonymousCallRejection = this.getNodeParameter('anonymousCallRejection', _itemIndex) as string;
	const callRestrictionIncoming = this.getNodeParameter('callRestrictionIncoming', _itemIndex) as string;
	const callRestrictionOutgoing = this.getNodeParameter('callRestrictionOutgoing', _itemIndex) as string;
	const callWaiting = this.getNodeParameter('callWaiting', _itemIndex) as string;
	const codecs = this.getNodeParameter('codecs', _itemIndex) as string;
	const defaultVoicemail = this.getNodeParameter('defaultVoicemail', _itemIndex) as string;
	const displayNumber = this.getNodeParameter('displayNumber', _itemIndex) as string;
	const doNotDisturb = this.getNodeParameter('doNotDisturb', _itemIndex) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const forwardBackup = this.getNodeParameter('forwardBackup', _itemIndex) as string;
	const forwardBackupNature = this.getNodeParameter('forwardBackupNature', _itemIndex) as string;
	const forwardBackupNumber = this.getNodeParameter('forwardBackupNumber', _itemIndex) as string;
	const forwardBusy = this.getNodeParameter('forwardBusy', _itemIndex) as string;
	const forwardBusyNature = this.getNodeParameter('forwardBusyNature', _itemIndex) as string;
	const forwardBusyNumber = this.getNodeParameter('forwardBusyNumber', _itemIndex) as string;
	const forwardNoReply = this.getNodeParameter('forwardNoReply', _itemIndex) as string;
	const forwardNoReplyDelay = this.getNodeParameter('forwardNoReplyDelay', _itemIndex) as string;
	const forwardNoReplyNature = this.getNodeParameter('forwardNoReplyNature', _itemIndex) as string;
	const forwardNoReplyNumber = this.getNodeParameter('forwardNoReplyNumber', _itemIndex) as string;
	const forwardUnconditional = this.getNodeParameter('forwardUnconditional', _itemIndex) as string;
	const forwardUnconditionalNature = this.getNodeParameter('forwardUnconditionalNature', _itemIndex) as string;
	const forwardUnconditionalNumber = this.getNodeParameter('forwardUnconditionalNumber', _itemIndex) as string;
	const identificationRestriction = this.getNodeParameter('identificationRestriction', _itemIndex) as string;
	const intercom = this.getNodeParameter('intercom', _itemIndex) as string;
	const ipRestrictions = this.getNodeParameter('ipRestrictions', _itemIndex) as string;
	const language = this.getNodeParameter('language', _itemIndex) as string;
	const lockOutCall = this.getNodeParameter('lockOutCall', _itemIndex) as string;
	const lockOutCallPassword = this.getNodeParameter('lockOutCallPassword', _itemIndex) as string;
	const proxy = this.getNodeParameter('proxy', _itemIndex) as string;
	const recordOutgoingCallsBeta = this.getNodeParameter('recordOutgoingCallsBeta', _itemIndex) as string;
	const toneOnCallWaitingSoundId = this.getNodeParameter('toneOnCallWaitingSoundId', _itemIndex) as string;
	const toneOnHoldSoundId = this.getNodeParameter('toneOnHoldSoundId', _itemIndex) as string;
	const toneRingbackSoundId = this.getNodeParameter('toneRingbackSoundId', _itemIndex) as string;
	const voicemailExternalNumber = this.getNodeParameter('voicemailExternalNumber', _itemIndex) as string;
	const voicemailInternalNumber = this.getNodeParameter('voicemailInternalNumber', _itemIndex) as string;

	const body: IDataObject = {
    absentSubscriber: absentSubscriber,
    anonymousCallRejection: anonymousCallRejection,
    callRestrictionIncoming: callRestrictionIncoming,
    callRestrictionOutgoing: callRestrictionOutgoing,
    callWaiting: callWaiting,
    codecs: codecs,
    defaultVoicemail: defaultVoicemail,
    displayNumber: displayNumber,
    doNotDisturb: doNotDisturb,
    domain: domain,
    forwardBackup: forwardBackup,
    forwardBackupNature: forwardBackupNature,
    forwardBackupNumber: forwardBackupNumber,
    forwardBusy: forwardBusy,
    forwardBusyNature: forwardBusyNature,
    forwardBusyNumber: forwardBusyNumber,
    forwardNoReply: forwardNoReply,
    forwardNoReplyDelay: forwardNoReplyDelay,
    forwardNoReplyNature: forwardNoReplyNature,
    forwardNoReplyNumber: forwardNoReplyNumber,
    forwardUnconditional: forwardUnconditional,
    forwardUnconditionalNature: forwardUnconditionalNature,
    forwardUnconditionalNumber: forwardUnconditionalNumber,
    identificationRestriction: identificationRestriction,
    intercom: intercom,
    ipRestrictions: ipRestrictions,
    language: language,
    lockOutCall: lockOutCall,
    lockOutCallPassword: lockOutCallPassword,
    proxy: proxy,
    recordOutgoingCallsBeta: recordOutgoingCallsBeta,
    toneOnCallWaitingSoundId: toneOnCallWaitingSoundId,
    toneOnHoldSoundId: toneOnHoldSoundId,
    toneRingbackSoundId: toneRingbackSoundId,
    voicemailExternalNumber: voicemailExternalNumber,
    voicemailInternalNumber: voicemailInternalNumber
    };

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName + '/options', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
