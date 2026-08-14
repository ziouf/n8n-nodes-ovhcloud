# OVH Cloud Dedicated Cloud — Create Zerto Single Remote Site

> Opération `zertoSingleRemoteSiteCreate` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleRemoteSiteCreate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `label` | string | Oui |
| `preSharedKey` | string | Oui |
| `remoteEndpointPublicIp` | string | Oui |
| `remoteVraNetwork` | string | Oui |
| `remoteZvmInternalIp` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
