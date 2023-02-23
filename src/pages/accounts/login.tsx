import React from 'react'
import Header from '@/components/common/header'
import Icons from '@/components/common/icons'
import { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/

type FormData = {
  email: string
  password: string
  rememberMe: boolean
  autoLogin: boolean
}

const PageLogin: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: true,
      autoLogin: false
    }
  })

  const validateEmail = (email: string) => {
    if (!emailRegex.test(email)) {
      return '이메일 양식에 맞게 작성해주세요.'
    }
    return true
  }

  const validatePassword = (password: string) => {
    if (!passwordRegex.test(password)) {
      return '특수문자, 영문, 숫자를 섞어 최소 8자리를 입력해주세요.'
    }
    return true
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data, 'asdfa')
  }

  return (
    <>
      <Header title="로그인" leftNode={<Icons.ArrowRight className="h-24 w-24" />} />
      <div className="flex w-full flex-col items-center gap-10 px-10">
        <section className="mt-10 flex w-full flex-col items-center justify-center gap-20">
          <h2 className="head3 flex flex-col items-center justify-center">
            {'ChawChaw에\n로그인 해주세요.'.split('\n').map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h2>
          <h3 className="head5">아이디와 비밀번호를 입력해주세요.</h3>
        </section>
        <form className="flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="input-label mb-10">
            이메일
            <input
              id="email"
              className="input-field h-40 w-full"
              type="email"
              placeholder="chawchaw@example.com"
              autoComplete="true"
              {...register('email', { required: true, validate: validateEmail })}
            />
            {errors.email?.type === 'required' && (
              <span className="paragraph text-error" role="alert" aria-live="polite">
                이메일을 입력해주세요.
              </span>
            )}
            {errors.email?.type === 'validate' && (
              <span className="paragraph text-error" role="alert" aria-live="polite">
                {errors.email.message}
              </span>
            )}
          </label>
          <label htmlFor="password" className="input-label mb-10">
            비밀번호
            <input
              id="password"
              className="input-field h-40 w-full"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register('password', { required: true, validate: validatePassword })}
            />
            {errors.password?.type === 'required' && (
              <span className="paragraph text-error" role="alert" aria-live="polite">
                비밀번호를 입력해주세요.
              </span>
            )}
            {errors.password?.type === 'validate' && (
              <span className="paragraph text-error" role="alert" aria-live="polite">
                {errors.password.message}
              </span>
            )}
          </label>
          <div className="mb-10 flex w-full items-center justify-start gap-10">
            <div className="flex items-center gap-4">
              <input type="checkbox" id="rememberMe" {...register('rememberMe')} />
              <label htmlFor="rememberMe">아이디 저장</label>
            </div>
            <div className="flex items-center gap-4">
              <input type="checkbox" id="autoLogin" {...register('autoLogin')} />
              <label htmlFor="autoLogin">자동 로그인</label>
            </div>
          </div>
          <button type="submit" className="btn-primary head5 h-48 w-full">
            로그인
          </button>
        </form>
        <section className="divide-color divide-x divide-gray-300">
          <Link href="/accounts/find-id" className="paragraph px-10">
            아이디 찾기
          </Link>
          <Link href="/accounts/find-password" className="paragraph px-10">
            비밀번호 찾기
          </Link>
          <Link href="/accounts/sign-up" className="paragraph px-10">
            회원가입
          </Link>
        </section>
        <section className="flex w-full gap-10">
          <button type="submit" className="btn-outline head5 h-48 w-full">
            Github
          </button>
          <button type="submit" className="btn-outline head5 h-48 w-full">
            Google
          </button>
        </section>
      </div>
    </>
  )
}

export default PageLogin
