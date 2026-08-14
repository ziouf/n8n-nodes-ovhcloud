# OVH Cloud Dedicated Cloud — Update Zerto Single VRA Resources

> Opération `zertoSingleVraResourcesUpdate` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/disasterRecovery/zertoSingle/zertoSingleVraResourcesUpdate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `resourcesSize` | options | Oui |
| `L` | — | — |
| `S` | — | — |
| `XL` | — | — |
| `XS` | — | — |
| `vmId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
