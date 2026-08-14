# OVH Cloud Domain — Update Zone SOA

> Opération `domainZoneSoaUpdatePut` · Fichier source : `nodes/OvhCloudDomain/resources/zone/domainZoneSoaUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/domain/zone/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `zoneName` | string | Oui |
| `email` | string | — |
| `expire` | number | — |
| `nxDomainTtl` | number | — |
| `refresh` | number | — |
| `serial` | number | — |
| `server` | string | — |
| `ttl` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
