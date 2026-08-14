# OVH Cloud Ip — Update Mitigation Profile

> Opération `ipMitigationProfilesUpdatePut` · Fichier source : `nodes/OvhCloudIp/resources/mitigationProfiles/ipMitigationProfilesUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/ip/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `ip` | string | Oui |
| `ipMitigationProfile` | string | Oui |
| `autoMitigationTimeOut` | options | — |
| `0 Minutes` | — | — |
| `15 Minutes` | — | — |
| `60 Minutes` | — | — |
| `360 Minutes` | — | — |
| `1560 Minutes` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
