# OVH Cloud Nutanix — List Raw Availabilities

> Opération `availabilitiesRawGet` · Fichier source : `nodes/OvhCloudNutanix/resources/availabilitiesRawGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/nutanix/availabilities/raw` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `quantity` | number | Oui |
| `datacenters` | string | — |
| `deploymentType` | string | — |
| `erasureCoding` | boolean | — |
| `excludeDatacenters` | boolean | — |
| `excludeRegions` | boolean | — |
| `memory` | string | — |
| `planCode` | string | — |
| `redundancyFactor` | number | — |
| `regions` | string | — |
| `server` | string | — |
| `storage` | string | — |
| `systemStorage` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
