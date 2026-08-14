# OVH Cloud Domain — Alter Redirection Object Properties

> Opération `domainZoneRedirectionUpdatePut` · Fichier source : `nodes/OvhCloudDomain/resources/zone/domainZoneRedirectionUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/domain/zone/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `id` | string | Oui |
| `zoneName` | string | Oui |
| `description` | string | — |
| `keywords` | string | — |
| `target` | string | — |
| `title` | string | — |
| `type` | options | — |
| `Invisible` | — | — |
| `Visible` | — | — |
| `visiblePermanent` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
