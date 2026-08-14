# OVH Cloud Domain — Launch a Contact Change Procedure (Zone)

> Opération `domainZoneChangeContactPost` · Fichier source : `nodes/OvhCloudDomain/resources/zone/domainZoneChangeContactPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/domain/zone/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `zoneName` | string | Oui |
| `contactAdmin` | string | — |
| `contactBilling` | string | — |
| `contactTech` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
