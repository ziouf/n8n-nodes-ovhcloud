# OVH Cloud Ip — Create Mitigation Profile

> Opération `ipMitigationProfilesCreatePost` · Fichier source : `nodes/OvhCloudIp/resources/mitigationProfiles/ipMitigationProfilesCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/ip/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `ip` | string | Oui |
| `autoMitigationTimeOut` | options | Oui |
| `0 Minutes` | — | — |
| `15 Minutes` | — | — |
| `60 Minutes` | — | — |
| `360 Minutes` | — | — |
| `1560 Minutes` | — | — |
| `ipMitigationProfile` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
