# OVH Cloud Nutanix — Fetch Availabilities

> Opération `availabilitiesGet` · Fichier source : `nodes/OvhCloudNutanix/resources/availabilitiesGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/nutanix/availabilities` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `quantity` | number | Oui |
| `erasureCoding` | boolean | — |
| `memory` | string | — |
| `planCode` | string | — |
| `rackAwareness` | boolean | — |
| `redundancyFactor` | number | — |
| `server` | string | — |
| `storage` | string | — |
| `systemStorage` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
