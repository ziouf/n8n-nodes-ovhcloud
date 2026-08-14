# OVH Cloud Dedicated Cloud — Configure Zerto Single VPN

> Opération `zertoSingleConfigureVpn` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleConfigureVpn.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `preSharedKey` | string | Oui |
| `remoteEndpointInternalIp` | string | Oui |
| `remoteEndpointPublicIp` | string | Oui |
| `remoteVraNetwork` | string | — |
| `remoteZvmInternalIp` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
