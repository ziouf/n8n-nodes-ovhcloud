# OVH Cloud Domain — Alter Record Object Properties

> Opération `domainZoneDynHostRecordUpdatePut` · Fichier source : `nodes/OvhCloudDomain/resources/zone/domainZoneDynHostRecordUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/domain/zone/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `id` | string | Oui |
| `zoneName` | string | Oui |
| `ip` | string | — |
| `subDomain` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
