# OVH Cloud Domain — Alter This Object Properties

> Opération `domainZoneOptionServiceInfosUpdatePut` · Fichier source : `nodes/OvhCloudDomain/resources/zone/domainZoneOptionServiceInfosUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/domain/zone/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `name` | string | Oui |
| `zoneName` | string | Oui |
| `automatic` | boolean | — |
| `deleteAtExpiration` | boolean | — |
| `forced` | boolean | — |
| `manualPayment` | boolean | — |
| `period` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
