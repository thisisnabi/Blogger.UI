/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateArticleRequest {
  title?: string | null
  body?: string | null
  summary?: string | null
  tags?: string[] | null
}

export interface CreateArticleResponse {
  articleId?: string | null
}

export interface GetArchiveItemResponse {
  articleId?: string | null
  title?: string | null
  /** @format int32 */
  day?: number
}

export interface GetArchiveResponse {
  /** @format int32 */
  year?: number
  /** @format int32 */
  month?: number
  articles?: GetArchiveItemResponse[] | null
}

export interface GetArticleResponse {
  articleId?: string | null
  title?: string | null
  body?: string | null
  summary?: string | null
  /** @format int32 */
  readOnMinutes?: number
  authorFullName?: string | null
  authorAvatar?: string | null
  authorJobTitle?: string | null
  /** @format date-time */
  publishedOnUtc?: string
  tags?: string[] | null
}

export interface GetArticlesResponse {
  articleId?: string | null
  title?: string | null
  body?: string | null
  summary?: string | null
  /** @format date-time */
  publishedOnUtc?: string
  /** @format int32 */
  readOnMinutes?: number
  tags?: string[] | null
}

export interface GetCommentsResponse {
  id?: string | null
  fullName?: string | null
  /** @format date-time */
  createdOnUtc?: string
  content?: string | null
}

export interface GetPopularArticlesResponse {
  title?: string | null
  articleId?: string | null
}

export interface GetPopularTagsResponse {
  name?: string | null
}

export interface GetRepliesResponse {
  fullName?: string | null
  /** @format date-time */
  createdOnUtc?: string
  content?: string | null
}

export interface GetTaggedArticlesResponse {
  articleId?: string | null
  title?: string | null
  body?: string | null
  summary?: string | null
  /** @format date-time */
  publishedOnUtc?: string
  /** @format int32 */
  readOnMinutes?: number
  tags?: string[] | null
}

export interface GetTagsResponse {
  name?: string | null
  /** @format int32 */
  count?: number
}

export interface MakeCommentResponse {
  commentId?: string | null
}

export interface MakeCommetRequest {
  articleId?: string | null
  content?: string | null
  fullName?: string | null
  email?: string | null
}

export interface MakeDraftRequest {
  title?: string | null
  body?: string | null
  summary?: string | null
  tags?: string[] | null
}

export interface MakeDraftResponse {
  draftId?: string | null
}

export interface ReplyToCommentRequest {
  content?: string | null
  fullName?: string | null
  email?: string | null
}

export interface ReplyToCommentResponse {
  replyId?: string | null
}

export interface SubscribeRequest {
  email?: string | null
}

export interface UpdateDraftRequest {
  draftId?: string | null
  title?: string | null
  body?: string | null
  summary?: string | null
  tags?: string[] | null
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios'
import axios from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || '',
    })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] =
        property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        )
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { 'Content-Type': type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    })
  }
}

/**
 * @title Blogger.APIs
 * @version 1.0
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  comments = {
    /**
     * No description
     *
     * @tags Articles
     * @name RepliesCommentIdList
     * @request GET:/comments/replies/{comment-id}
     */
    repliesCommentIdList: (commentId: string, params: RequestParams = {}) =>
      this.request<GetRepliesResponse[], any>({
        path: `/comments/replies/${commentId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentIdReplyCreate
     * @request POST:/comments/{comment-id}/reply
     */
    commentIdReplyCreate: (
      commentId: string,
      data: ReplyToCommentRequest,
      params: RequestParams = {}
    ) =>
      this.request<ReplyToCommentResponse, any>({
        path: `/comments/${commentId}/reply`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name CommentsCreate
     * @request POST:/comments
     */
    commentsCreate: (data: MakeCommetRequest, params: RequestParams = {}) =>
      this.request<MakeCommentResponse, any>({
        path: `/comments`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name ArticleIdList
     * @request GET:/comments/{article-id}
     */
    articleIdList: (articleId: string, params: RequestParams = {}) =>
      this.request<GetCommentsResponse[], any>({
        path: `/comments/${articleId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name RepliesApproveList
     * @request GET:/comments/replies/approve
     */
    repliesApproveList: (
      query: {
        Link: string
        /** @format uuid */
        'comment-id': string
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/comments/replies/approve`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comments
     * @name ApproveList
     * @request GET:/comments/approve
     */
    approveList: (
      query: {
        Link: string
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/comments/approve`,
        method: 'GET',
        query: query,
        ...params,
      }),
  }
  articles = {
    /**
     * No description
     *
     * @tags Articles
     * @name DraftUpdate
     * @request PUT:/articles/draft
     */
    draftUpdate: (data: UpdateDraftRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/articles/draft`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name DraftCreate
     * @request POST:/articles/draft
     */
    draftCreate: (data: MakeDraftRequest, params: RequestParams = {}) =>
      this.request<MakeDraftResponse, any>({
        path: `/articles/draft`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name DraftIdPublishPartialUpdate
     * @request PATCH:/articles/{draft-id}/publish
     */
    draftIdPublishPartialUpdate: (
      draftId: string,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/articles/${draftId}/publish`,
        method: 'PATCH',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name TagsList
     * @request GET:/articles/tags
     */
    tagsList: (params: RequestParams = {}) =>
      this.request<GetTagsResponse[], any>({
        path: `/articles/tags`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name TaggedList
     * @request GET:/articles/tagged
     */
    taggedList: (
      query: {
        Tag: string
      },
      params: RequestParams = {}
    ) =>
      this.request<GetTaggedArticlesResponse[], any>({
        path: `/articles/tagged`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name TagsPopularsList
     * @request GET:/articles/tags/populars
     */
    tagsPopularsList: (params: RequestParams = {}) =>
      this.request<GetPopularTagsResponse[], any>({
        path: `/articles/tags/populars`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name PopularsList
     * @request GET:/articles/populars
     */
    popularsList: (params: RequestParams = {}) =>
      this.request<GetPopularArticlesResponse[], any>({
        path: `/articles/populars`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesList
     * @request GET:/articles
     */
    articlesList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        Page?: number
        /**
         * @format int32
         * @default 10
         */
        Size?: number
        /** @default "" */
        Title?: string
      },
      params: RequestParams = {}
    ) =>
      this.request<GetArticlesResponse[], any>({
        path: `/articles`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesCreate
     * @request POST:/articles
     */
    articlesCreate: (data: CreateArticleRequest, params: RequestParams = {}) =>
      this.request<CreateArticleResponse, any>({
        path: `/articles`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticleIdList
     * @request GET:/articles/{article-id}
     */
    articleIdList: (articleId: string, params: RequestParams = {}) =>
      this.request<GetArticleResponse, any>({
        path: `/articles/${articleId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArchiveList
     * @request GET:/articles/archive
     */
    archiveList: (params: RequestParams = {}) =>
      this.request<GetArchiveResponse[], any>({
        path: `/articles/archive`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  }
  subscribe = {
    /**
     * No description
     *
     * @tags Subscribers
     * @name SubscribeCreate
     * @request POST:/subscribe
     */
    subscribeCreate: (data: SubscribeRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/subscribe`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  }
}
