# OVH Cloud Domain — List Record (Zone)

> Opération `domainZoneRecordListGet` · Fichier source : `nodes/OvhCloudDomain/resources/zone/domainZoneRecordListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/domain/zone/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `zoneName` | string | Oui |
| `fieldType` | options | — |
| `A` | — | — |
| `AAAA` | — | — |
| `CAA` | — | — |
| `CNAME` | — | — |
| `DKIM` | — | — |
| `DMARC` | — | — |
| `DNAME` | — | — |
| `HTTPS` | — | — |
| `LOC` | — | — |
| `MX` | — | — |
| `NAPTR` | — | — |
| `NS` | — | — |
| `PTR` | — | — |
| `RP` | — | — |
| `SPF` | — | — |
| `SRV` | — | — |
| `SSHFP` | — | — |
| `SVCB` | — | — |
| `TLSA` | — | — |
| `TXT` | — | — |
| `subDomain` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
