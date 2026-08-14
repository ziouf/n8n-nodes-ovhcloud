# OVH Cloud Domain — List Zone Tasks

> Opération `domainZoneTaskListGet` · Fichier source : `nodes/OvhCloudDomain/resources/zone/domainZoneTaskListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/domain/zone/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `zoneName` | string | Oui |
| `function_` | options | — |
| `DnsAnycastActivate` | — | — |
| `DnsAnycastDeactivate` | — | — |
| `DnssecDisable` | — | — |
| `DnssecEnable` | — | — |
| `DnssecResigning` | — | — |
| `DnssecRollKsk` | — | — |
| `DnssecRollZsk` | — | — |
| `ZoneCreate` | — | — |
| `ZoneCut` | — | — |
| `ZoneDelete` | — | — |
| `ZoneImport` | — | — |
| `ZoneRestore` | — | — |
| `status` | options | — |
| `Cancelled` | — | — |
| `Doing` | — | — |
| `Done` | — | — |
| `error` | — | — |
| `Problem` | — | — |
| `Todo` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
