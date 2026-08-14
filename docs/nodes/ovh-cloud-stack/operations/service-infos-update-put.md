# OVH Cloud Stack — Update Stack Service Information

> Opération `serviceInfosUpdatePut` · Fichier source : `nodes/OvhCloudStack/resources/serviceInfosUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/stack/mis/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `contactAdmin` | string | — |
| `contactBilling` | string | — |
| `contactTech` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
